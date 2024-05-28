# Gerador de QR CODE em NODE.js 

# Sobre o projeto 
Este projeto tem por objetivo disponibilizar serviços que podem ser utilizados em um e-commerce. Atualmente existem dois serviços, sendo eles:
- **Gerador de QR Code**: Cria um QR Code com o link fornecido como parâmetro.
- **Gerador de senhas** aleatórias: cria senhas aleatórias.

# Tecnologias utilizadas
- JavaScript
- Node.js
- Git
- Visual Studio Code

# Como executar o projeto
**Pré-requisitos**: Node.js 20 ou superior, Git

```bash
# realize o clone do projeto
git clone https://github.com/matheus-fvp13/node-gerador-qrcode.git
# abrir no diretorio do projeto
cd node-gerador-qrcode
# baixar as dependências do projeto
npm i
# executar o projeto
npm start dev
```

Após executar o projeto as informações serão exibitas no terminal, com isso o usuário podera escolher uma entre duas opções:

```bash
prompt: Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD):
```
Ao escolher a **opção 1**, duas perguntas serão realizadas:
```bash
prompt: Digite o link para gerar o QR CODE: www.google.com
prompt: Escolha entre o tipo de QRCODE (1 - NORMAL ou 2 - TERMINAL):
```
Respondidas as perguntas um QR Code Será exibido no terminal

```bash
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ ▄▄▄▄▄ ██ ▄ ▄█ ▄▄▄▄▄ █
█ █   █ █▀ ▀▀██ █   █ █
█ █▄▄▄█ █▄█ █ █ █▄▄▄█ █
█▄▄▄▄▄▄▄█▄▀ ▀ █▄▄▄▄▄▄▄█
█▄ ▀█▀▄▄ █▄▀▄█▀▀█▄ ▀▀██
██▀  ▀▀▄▄▀█  ▄ ▄▀▀ ▀ ▀█
███▄▄▄▄▄▄ ▄ ██ ▀█▀▀▀▀ █
█ ▄▄▄▄▄ █ ▄▀ ▄▀▀▀█▄▀▄██
█ █   █ ██▄▄█▄▀▄█ ▀█▄▄█
█ █▄▄▄█ █▀█▀█▄█▄▀  ▀▄▄█
█▄▄▄▄▄▄▄█▄▄▄▄██▄████▄██
```

Se o usuario optar por escolher a **opção 2**, uma senha aleatória será gerada imediatamente:
```bash
password
23lr^at!4$4p
```

# Autor
Matheus Fernando Vieira Pinto

https://www.linkedin.com/in/matheus-fvp/







