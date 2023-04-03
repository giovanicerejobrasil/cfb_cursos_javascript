class Login {
    static logged = false;
    static registrationLogged = null;
    static nameLogged = null;
    static accessLogged = null;
    static styleCSS = null;
    static callbackOK = null;
    static callbackNotOK = null;
    static config = {color: '#2961b6', image: '../images/js_logo.png'};
    static endpoint = null;

    static login = (callbackOK, callbackNotOK, config = null) => {
        if (config) {
            this.config = config;
        }

        this.callbackOK = () => {
            callbackOK();
        };
        this.callbackNotOK = () => {
            callbackNotOK();
        };

        this.styleCSS = `
        .bgLogin {font-family: "Montserrat", sans-serif;display: flex;justify-content: center;align-items: center;width: 100%;
        height: 100vh;position: absolute;top: 0;left: 0;background-color: rgba(0, 0, 0, .75);box-sizing: border-box;}
        .baseLogin {display: flex;justify-content: center;align-items: stretch;width: 50%;box-sizing: inherit;}
        .elLogin {display: flex;justify-content: center;align-items: flex-start;flex-direction: column;width: 100%;
        background-color: #eeeeee;padding: 10px;border-radius: 10px 0 0 10px;box-sizing: inherit;}
        .logoLogin {display: flex;justify-content: center;align-items: center;width: 60%;background-color: rgba(210, 210, 210, 0.2);
            border-radius: 0 10px 10px 0;overflow: hidden;box-sizing: inherit;}
        .logoLogin img {width: 100%;box-sizing: inherit;}
        .inputLogin {display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: inherit;
            width: inherit;margin-bottom: 20px; padding: 0 10px;}
        .inputLogin label {cursor: pointer;font-size: 1.2rem;font-weight: bolder;}
        .inputLogin input {width: 100%;font-size: 1.3rem;height: 50px;border-radius: 5px;padding: 3px 10px;}
        .buttonLogin {display: flex;justify-content: space-evenly;align-items: center;width: 100%;box-sizing: inherit;}
        .buttonLogin button {font-size: 1.2rem;cursor: pointer;border-radius: 5px;padding: 15px;width: 160px;box-sizing: inherit;
            transition: all .3s;color: #eeeeee;background-color: ${this.config.color};}
        `;

        const styleLogin = document.createElement('style');
        styleLogin.id = 'styleLogin';
        styleLogin.innerHTML = this.styleCSS;
        document.head.appendChild(styleLogin);

        //Background Login
        const bgLogin = document.createElement('div');
        bgLogin.id = 'bgLogin';
        bgLogin.classList.add('bgLogin');
        document.body.prepend(bgLogin);

        // Base Login
        const baseLogin = document.createElement('div');
        baseLogin.id = 'baseLogin';
        baseLogin.classList.add('baseLogin');
        bgLogin.appendChild(baseLogin);

        // Elements Login
        const elLogin = document.createElement('div');
        elLogin.id = 'elLogin';
        elLogin.classList.add('elLogin');
        baseLogin.appendChild(elLogin);

        // Input Login
        const inputLoginUsername = document.createElement('div');
        inputLoginUsername.id = 'inputLogin';
        inputLoginUsername.classList.add('inputLogin');
        elLogin.appendChild(inputLoginUsername);

        // Username Label
        const usernameLabel = document.createElement('label');
        usernameLabel.innerText = 'Registration Number';
        usernameLabel.setAttribute('for', 'fUsername');

        // Username Input
        const usernameInput = document.createElement('input');
        usernameInput.id = 'fUsername';
        usernameInput.name = 'fUsername';
        usernameInput.type = 'text';

        inputLoginUsername.appendChild(usernameLabel);
        inputLoginUsername.appendChild(usernameInput);

        // Input Login
        const inputLoginPassword = document.createElement('div');
        inputLoginPassword.id = 'inputLogin';
        inputLoginPassword.classList.add('inputLogin');
        elLogin.appendChild(inputLoginPassword);

        // Password Label
        const passwordLabel = document.createElement('label');
        passwordLabel.innerText = 'Password';
        passwordLabel.setAttribute('for', 'fPassword');

        // Password Input
        const passwordInput = document.createElement('input');
        passwordInput.id = 'fPassword';
        passwordInput.name = 'fPassword';
        passwordInput.type = 'password';

        inputLoginPassword.appendChild(passwordLabel);
        inputLoginPassword.appendChild(passwordInput);

        // Button Login
        const buttonLogin = document.createElement('div');
        buttonLogin.classList.add('buttonLogin')
        elLogin.appendChild(buttonLogin);

        // Button BTN Login
        const btnLogin = document.createElement('button');
        btnLogin.id = 'btnLogin';
        btnLogin.innerText = 'Login';
        btnLogin.addEventListener('click', () => {
            this.verifyLogin();
        });

        // Button BTN Cancel
        const btnCancel = document.createElement('button');
        btnCancel.id = 'btnCancel';
        btnCancel.innerText = 'Cancelar';
        btnCancel.addEventListener('click', () => {
            this.closeLogin();
        });

        buttonLogin.appendChild(btnLogin);
        buttonLogin.appendChild(btnCancel);

        // Logo Login
        const logoLogin = document.createElement('div');
        logoLogin.id = 'logoLogin';
        logoLogin.classList.add('logoLogin');
        baseLogin.appendChild(logoLogin);

        // Image Login
        const imgLogin = document.createElement('img');
        imgLogin.src = this.config.image;
        imgLogin.alt = 'Logo';
        imgLogin.title = 'Logo';

        logoLogin.appendChild(imgLogin);
    }

    static verifyLogin = () => {
        const registration = document.querySelector('#fUsername').value;
        const password = document.querySelector('#fPassword').value;

        const endpoint = `https://loginv1.giovanicerejobr.repl.co/?registration=${registration}&password=${password}`;
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res) {
                    this.logged = true;
                    this.registrationLogged = registration;
                    this.nameLogged = res.name;
                    this.accessLogged = res.access;
                    this.callbackOK();
                    this.closeLogin();

                } else {
                    this.logged = false;
                    this.registrationLogged = null;
                    this.nameLogged = null;
                    this.accessLogged = null;
                    this.callbackNotOK();
                }
            });
    }

    static closeLogin = () => {
        const styleLogin = document.querySelector('#styleLogin');
        const bgLogin = document.querySelector('#bgLogin');

        bgLogin.remove();
        styleLogin.remove();
    }
}