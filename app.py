from flask import *
from flask_session import Session
import mysql.connector as mysql
from werkzeug.security import generate_password_hash, check_password_hash
import pandas as pd
import os
from flask_mail import Mail, Message
from datetime import date
import random

app = Flask(__name__)
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)
mail = Mail(app)

def sessioncheck():
    if('usergmail' in session or 'receptionistgmail' in session):
        return True
    else:
        return False

@app.after_request
def add_header(response):
    if 'Cache-Control' not in response.headers:
        response.headers['Cache-Control']='no-store,max-age=0'
    return response

app.secret_key="beautifulpeople"

@app.route('/')
def home():
    return render_template('index.html', result = result)

@app.route('/ourdoctors')
def ourDoctors():
    return render_template('ourdoctors.html')

@app.route('/userregister')
def userRegister():
    return render_template('user_register.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/userregister2', methods=['POST'])
def userRegister2():
    con=mysql.connect(host='localhost', user='root', password='', database='e_case_paper_registration')
    cur=con.cursor()
    userfirstname = request.form['userfirstname']
    userlastname = request.form['userlastname']
    usergmail = request.form['usergmail']
    userphonenumber = request.form['userphonenumber']
    userpassword = request.form['userpassword']

    hashed_password = generate_password_hash(userpassword)

    cur.execute('select * from user where usergmail = %s', (usergmail,)) 
    result = cur.fetchone()

    cur.execute('select * from user')
    result1 = cur.fetchall() 

    if result:
        flash(message='gmail account already exists')
        return render_template('user_register.html')
    else:
        cur.execute('insert into user values(%s,%s, %s, %s, %s, %s)',(len(result1)+1,userfirstname, userlastname, usergmail, userphonenumber, hashed_password))
        con.commit()
        con.close()
        flash('your registration is succesful. Please login', 'register')
        return redirect('/userlogin')

@app.route('/userlogin')
def userLogIn():
    return render_template('user_login.html')

@app.route('/userlogin2', methods=['POST'])
def userLogin2():
    con=mysql.connect(host='localhost', user='root', password='', database='e_case_paper_registration')
    cur=con.cursor()
    usergmail=request.form['usergmail']
    userpassword=request.form['userpassword']
    cur.execute('select * from user where usergmail=%s',(usergmail,))
    result=cur.fetchone()
    print(result)

    if result :
        password_rs = result[5]
        fname = result[1].capitalize()
        lname = result[2].capitalize()
        print(password_rs)
        if check_password_hash(password_rs, userpassword):
            session['usergmail'] = usergmail
            session['userfirstname'] = fname
            session['userlastname'] = lname
            return redirect('/userhome')
        else:
            flash('Invalid gmail or password', 'login')
            return render_template('user_login.html')
    else:
        flash('Invalid gmail or password', 'login')
        return render_template('user_login.html')
    con.close()

@app.route('/userhome')
def userHome():
    if('usergmail' in session ):
        return render_template('user_home.html')
    else:
        return redirect('/userlogin')

@app.route('/userlogout')
def userLogOut():
    session.pop('usergmail')
    session.pop('userfirstname')
    session.pop('userlastname')
    flash("Logged out successfully", 'register')
    return redirect('/userlogin')

@app.route('/receptionistlogin')
def receptionistLogin():
    if('receptionistgmail' in session):
        return redirect('/receptionisthome')
    else:
        return render_template('receptionist_login.html')

@app.route('/receptionistlogin2', methods=['POST'])
def receptionistLogin2():
    con=mysql.connect(host='localhost', user='root', password='', database='e_case_paper_registration')
    cur=con.cursor()
    receptionistgmail=request.form['receptionistgmail']
    receptionistpassword =request.form['receptionistpassword']
    cur.execute('select * from receptionist where receptionistgmail=%s',(receptionistgmail,))
    result=cur.fetchone()
    print(result)

    if result :
        password_rs = result[3]
        receptionistname = result[0]
        if(password_rs == receptionistpassword):
            session['receptionistgmail'] = receptionistgmail
            session['receptionistname'] = receptionistname
            return redirect('/receptionisthome')
        else:
            flash('Invalid gmail or password', 'login')
            return redirect('/receptionistlogin')
    else:
        flash('Invalid gmail or password', 'login')
        return render_template('receptionist_login.html')
    con.close()

@app.route('/receptionisthome')
def receptionistHome():
    if('receptionistgmail' in session ):
        return render_template('receptionist_home.html')
    else:
        return redirect('/receptionistlogin')

@app.route('/receptionistlogout')
def receptionistLogOut():
    session.pop('receptionistgmail')
    session.pop('receptionistname')
    flash("Logged out successfully", 'register')
    return redirect('/receptionistlogin')