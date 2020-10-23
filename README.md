# @TECH Todo List • Mobile

## Preparação de Ambiente

As seguintes ferramentas precisam estar instaladas em sua máquina para um correto funcionamento do app.

- [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#mac-stable)
- [React Native](https://reactnative.dev/docs/0.61/getting-started)
- [NodeJS](https://nodejs.org/en/download/)

## Passo a passo

Clone o repositório na sua máquina:

```
$ git clone https://github.com/alanrslima/tech_todo_list
```

Entre no repositório

```
$ cd tech_todo_list
```

Instale o pacote de depêndencias

* Usando YARN
```
$ yarn install
```
* Ou usando NPM
```
$ npm install
```
---

## Rodando servidor localmente • `IMPORTANTE`
* Antes de iniciar o aplicativo, é necessário que o servidor esteja rodando localmente, para isto basta realizar a instalação seguindo os passos descritos [**AQUI!**](https://github.com/alanrslima/tech_todo_list_backend)

## Configuração de BASE_URL
Navegue até o arquivo `Environment.js` em *src/config/Environment.js* e inclua o IP Interno da sua máquina e salve o arquivo. (Caso não saiba, veja como descobrir o ip da sua máquina [**AQUI**](https://tecnoblog.net/309657/como-descobrir-qual-e-o-meu-ip/))

```
export default {
  BASE_URL: 'http://<IP_SUA_MAQUINA>:3333',
};
```


## Fluxo para instalação ANDROID

Execute o metro Bundler 
```
$ yarn start
```


Com o emulador Android aberto em sua máquina, execute:
* Usando YARN
```
$ yarn android
```
* Ou usando NPM
```
$ npm run android
```

## Fluxo para instalação IOS 

Execute o metro Bundler 
```
$ yarn start
```
Navegue até a pasta ios e realize a instalação dos Pods, executando:
```
$ cd ios && pod install
```

Logo após a instalação, volte para pasta raiz
```
$ cd ..
```

Com o emulador IOS aberto em sua máquina, execute:
* Usando YARN
```
$ yarn ios
```
* Ou usando NPM
```
$ npm run ios
```

Se tudo ocorrer como o esperado, o aplicativo será inicializado no seu emulador escolhido.

