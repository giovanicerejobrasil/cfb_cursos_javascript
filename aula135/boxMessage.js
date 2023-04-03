class BoxMessage {
    static color = '#888';
    static destiny = null;
    static divMsg = null;
    static type = null;
    static btnTexts = null;
    static commandOK = () => {

    };
    static commandYes = () => {

    };
    static commandNo = () => {

    };
    static styleCSS = `
    .divMsg {display: flex;justify-content: center;align-items: center;position: absolute;top: 0;left: 0;width: 100%;
        height: 100vh;background-color: rgba(0, 0, 0, .7);font-family: "Montserrat", sans-serif; z-index: 999;}
    .boxArea {display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;width: 500px;font-size: 1.3rem;}
    .boxHeader {display: flex;justify-content: flex-start;align-items: center;width: 100%;color: #ffffff;padding: 10px 5px;
        border-radius: 5px 5px 0 0;}
    .boxBody {display: flex;justify-content: flex-start;align-items: center;width: 100%;height: 150px;background-color: #eee;
        color: #000000;padding: 5px;}
    .boxFooter {display: flex;justify-content: space-evenly;align-items: center;width: 100%;background-color: #ccc;
        color: #eee;padding: 5px;border-radius: 0 0 5px 5px;}
    .btn {font-size: 1.1rem;color: #ffffff;padding: 10px 50px;border-radius: 5px;cursor: pointer;text-transform: uppercase;
        transition: all .5s}
    .ok {background-color: #003f8f}
    .ok:hover {background-color: #0057c0}
    .yes {background-color: #00c900}
    .yes:hover {background-color: #00e500}
    .no {background-color: #c90000}
    .no:hover {background-color: #e50000ff}
    `;

    static showBox = (title, text, config) => {
        this.color = config.color;
        this.type = config.type;
        this.btnTexts = config.btnTexts;
        this.commandOK = () => {
            config.commandOk();
        };
        this.commandYes = () => {
            config.commandY();
        };
        this.commandNo = () => {
            config.commandN();
        };

        const styleCSS = document.createElement('style');
        styleCSS.id = 'styleCSS';
        styleCSS.innerHTML = this.styleCSS;
        document.head.appendChild(styleCSS);

        this.destiny = document.body;
        this.divMsg = document.createElement('div');
        this.divMsg.id = 'divMsg';
        this.divMsg.classList.add('divMsg');
        this.destiny.prepend(this.divMsg);

        const boxArea = document.createElement('div');
        boxArea.id = 'boxArea';
        boxArea.classList.add('boxArea');
        this.divMsg.appendChild(boxArea);

        const boxHeader = document.createElement('div');
        boxHeader.innerText = title;
        boxHeader.classList.add('boxHeader');
        boxHeader.style.backgroundColor = this.color;
        boxArea.appendChild(boxHeader);

        const boxBody = document.createElement('div');
        boxBody.innerText = text;
        boxBody.classList.add('boxBody');
        boxArea.appendChild(boxBody);

        const boxFooter = document.createElement('div');
        boxFooter.classList.add('boxFooter');
        boxArea.appendChild(boxFooter);

        if (this.type === 'OK') {
            const btnOk = document.createElement('button');
            btnOk.innerText = 'Ok';
            btnOk.classList.add('btn', 'ok');
            btnOk.style.backgroundColor = this.color ?? '';
            btnOk.addEventListener('click', () => {
                this.hiddenBox();
                this.commandOK();
            });
            boxFooter.appendChild(btnOk);
        } else if (this.type === 'YN') {
            const btnYes = document.createElement('button');
            btnYes.innerText = this.btnTexts[0];
            btnYes.classList.add('btn', 'yes');
            btnYes.addEventListener('click', () => {
                this.hiddenBox();
                this.commandYes();
            });
            boxFooter.appendChild(btnYes);

            const btnNo = document.createElement('button');
            btnNo.innerText = this.btnTexts[1];
            btnNo.classList.add('btn', 'no');
            btnNo.addEventListener('click', () => {
                this.hiddenBox();
                this.commandNo();
            });
            boxFooter.appendChild(btnNo);
        }
    }

    static hiddenBox = () => {
        this.divMsg.remove();
    }
}

export {BoxMessage};