#en
Feature: Pagina de Login

Scenario: Login na Pagina  
    Given estar na pagina de Login
    When preencher o usuario "standard_user"
    And preencher a senha "secret_sauce"
    And clicar em login
    Then a pagina inicial aparece
