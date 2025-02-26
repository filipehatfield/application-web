# Fluxograma do Pipeline CI/CD

O pipeline CI/CD abaixo descreve o processo de integração contínua e deploy utilizando o GitHub Actions.

## 1. Push para a branch `main`
O pipeline é acionado toda vez que um push é feito na branch `main`.

## 2. Job: **CI (Integração Contínua)**
A primeira etapa do pipeline é a integração contínua, que compila e testa a aplicação.

1. **Checkout do código**
2. **Instalação de dependências**
3. **Execução de testes**
4. **Construção da aplicação**
5. **Armazenamento do artefato** (artefato é o build da aplicação)


## 3. Job: **Deploy para Teste**
Após o sucesso da integração contínua, o pipeline faz o deploy para o ambiente de teste.

1. **Checkout do código**
2. **Baixar o artefato**
3. **Deploy para o ambiente de teste**


## 4. Job: **Deploy para Produção**
Depois que o deploy para teste for bem-sucedido, o pipeline realiza o deploy para o ambiente de produção.

1. **Checkout do código**
2. **Baixar o artefato**
3. **Deploy para o ambiente de produção**

## 5. Job: **Notificação de Falha**
Se algum dos jobs falhar, uma notificação de falha será enviada por e-mail.

1. **Enviar e-mail de erro**

### Fluxograma Resumido:
- **Início** (Push na `main`)
- → **CI** (Integração Contínua)  
- → **Deploy para Teste**
- → **Deploy para Produção**
- → **Notificação de Falha** (se houver erro)

Este fluxo pode ser visualizado em formato gráfico, com as transições e dependências entre os jobs.