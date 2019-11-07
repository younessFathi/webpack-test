import './hello-world-button.css'
class HelloWorldButton{
    render(){
        const button = document.createElement('button');
        button.innerHTML = 'Hellow world';
        const body = document.querySelector('body');
        button.onclick = function(){
            const p = document.createElement('p');
            p.innerHTML = 'Hello world'
            p.classList.add('helloWorldStyle');
            body.appendChild(p);
        }
        
        body.appendChild(button);
    }
}

export default HelloWorldButton;