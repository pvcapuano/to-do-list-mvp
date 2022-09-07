## Resumo: 

Aplicação web de uma lista de tarefas desenvolvida em ReactJs. A idéia inicial era desenvolver um MVP e acrescentar as features de acordo com a demanda do cliente. A unica fonte de pesquisa aceita para resolver os problemas eram o stackoverflow ou a documentação oficial. 

A lista das funcionalidades exigidas pelo cliente eram:

* Layout (pegar ideia no Dribbble)
* Precisa ter um único input.
* Precisa ter um botão pra criar o item.
* Cada item criado precisa ser listado após clicar no botão de criar.
* Cada item precisa ter um botão de editar e um de excluir. Ao clicar em editar, o texto deve ser substituído por um input e os botões de editar e excluir devem ser substituídos por um de salvar.
* Ao clicar em excluir um item, ele deve ser excluído e desaparecer da lista em seguida.
* A lista criada precisa ser salva no local storage.

## Rodando o projeto:

* git clone https://github.com/pvcapuano/to-do-list-mvp.git
* cd to-do-list-mvp
* npm i (instala todas as dependências)
* npm start (inicia o projeto)

## Projeto

![Capturar](https://user-images.githubusercontent.com/10540844/188947746-15275c99-337d-4c75-81c6-fd8f86d4ae40.JPG)
<sub>Visão geral do projeto</sub>

![Capturar](https://user-images.githubusercontent.com/10540844/188947846-f77b6812-b648-4634-99e1-aa1f89284349.JPG)<br>
<sub>Modal</sub>

![Capturar](https://user-images.githubusercontent.com/10540844/188947974-7823d343-a8fa-48c2-b0f9-f2245c687b74.JPG)<br>
<sub>Modal code</sub>

## Projeto em produção:

<p>
 <a href="to-do-list-mvp-pi.vercel.app" target="_blank"> 
  <img src="https://ml.globenewswire.com/Resource/Download/3a54c241-a668-4c94-9747-3d3da9da3bf2?size=2" alt="Vercel" width="100"/> 
 </a>
</p>

## Tecnologias:

* ReactJs
* React Hooks
* Styled Components

## Objetivo:

Melhorar a lógica e desenvolver conforme a demanda solicitada pelo cliente. 

## Atividades realizadas:

* O projeto foi separado em 2 componentes: ListItems e ListInput. 
* Foi abstraido um arquivo separado, uma função que pega as informações salvas no localStorage.
 
