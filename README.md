# Deploy-Node-JS-and-Mysql-to-AWS-EC2-VPS

## Prepare basic app Node-JS have connect mysql 

- You can clone my basic app here: https://github.com/

## Create new instance
##  2. Install and config MY-SQL  
- Update ubuntu and  Install MY-SQL

    `$ sudo apt update`

    `$ sudo apt install mysql-server`

- Config MY-SQL

    `$ sudo mysql_secure_installation`

- Change method authenticated user to mysql_native_password

    `$ sudo mysql `

    `mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345678';`

    `mysql> exit`

- Test connect mysql

    `$ mysql -u root -p `

    Enter password: 12345678

    `mysql> exit`


##  3. App Node-JS

-  Install npm 
    `$ sudo apt install npm`

-  Clone project  ( your project or use my project at https://github.com/nguyenthanhson162001/Deploy-Node-JS-and-Mysql-to-AWS-EC2-VPS-.git)

    `$ sudo git clone  https://github.com/.........`

    `$ cd your-project`

    `$ npm install `

-  Allow port (port in your app EX: 3000) 

    `$ sudo ufw enable`

    `$ sudo ufw allow 3000`

- Run test app  (index.js is app name)

    `$ sudo node index.js`
    - Check in browser and check connect to mysql  http://hostname:3000/mysql

## Run app in background using PM2
- Install PM2

    `$ sudo npm i pm2 -g`

- Start app with app name = demo

    `sudo pm2 start index.js --name demo`


---
## Bonus
- Can stop app using 

    `   sudo pm2 stop all `

- Can Reload app using      

    ` sudo pm2 reload all `

---

## *** ------------ Done and thank's very much------------  ***






