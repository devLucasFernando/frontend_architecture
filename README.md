# Frontend architecture

## O objetivo desse repositório é percorrer pelas principais implementações de arquitetura no frontend.

### MVVM (Model-View-ViewModel)

O modelo de arquitetura Model-View-ViewModel (MVVM) é um padrão de design amplamente utilizado no desenvolvimento de interfaces de usuário modernas. Ele divide a aplicação em três componentes principais: Model, View e ViewModel, cada um com responsabilidades bem definidas. Essa divisão promove uma clara separação de preocupações, permitindo que os desenvolvedores trabalhem de forma mais eficiente em diferentes partes do aplicativo de forma independente. Ao desacoplar a interface de usuário da lógica de negócios, o MVVM facilita a manutenção, a escalabilidade e a testabilidade do código, além de permitir que mudanças na interface não afetem a lógica interna do sistema.

### Compreendendo o MVVM

**MVVM** é um padrão de design arquitetural que organiza a estrutura das aplicações de forma a separar claramente a lógica de negócios, a lógica de apresentação e a interface do usuário. Ele promove a separação de responsabilidades, tornando a base de código mais modular e sustentável.

- **Model (Modelo):** Representa os dados e a lógica de negócios da aplicação. Ele contém as regras e operações para manipular e fornecer os dados necessários, como comunicação com APIs, acesso ao banco de dados ou serviços externos.

- **View (Visão):** A **View** é a interface do usuário responsável por exibir os dados e capturar as interações do usuário. A **View** não contém lógica de negócios nem manipulação direta de estado.

- **ViewModel:** O **ViewModel** atua como um intermediário entre o **Model** e a **View**. Ele:
  - Converte os dados do **Model** em um formato que a **View** pode exibir.
  - Gerencia estados e lógica de apresentação.
  - Pode implementar mecanismos de **data binding** (vinculação de dados) para sincronizar automaticamente a interface do usuário com o estado.

### Benefícios do MVVM

- **Manutenção Facilitada:**  
  Mudanças na **View** não afetam o **ViewModel** ou o **Model**, facilitando a manutenção e evolução do código.

- **Escalabilidade:**  
  Adicionar novos recursos ou telas é mais simples, pois cada componente segue uma responsabilidade bem definida.

- **Colaboração Efetiva:**  
  Designers podem trabalhar nas **Views** enquanto desenvolvedores focam no **Model** e **ViewModel**.

### MVVM e Container/Presentational no React

No contexto de aplicações **React**, os mesmos benefícios proporcionados pela arquitetura **MVVM** podem ser alcançados por meio do design pattern **Container/Presentational**. Embora ambos os padrões sejam semelhantes, o **MVVM**, por ser uma arquitetura, define o comportamento de forma mais ampla, influenciando até na estrutura de pastas do projeto.

No padrão **Container/Presentational**, temos:

- **Container Components:** Componentes que lidam com a lógica e o estado, muito similares ao **ViewModel** do **MVVM**.
  
- **Presentational Components:** Componentes que são responsáveis apenas pela apresentação e interação com o usuário, funcionando de maneira parecida com a **View** do **MVVM**.

Ambos buscam separar as responsabilidades e tornar o código mais modular e testável, mas o **MVVM** oferece uma estrutura mais abrangente, que vai além do comportamento dos componentes, impactando diretamente na organização do código e nos fluxos de dados.


