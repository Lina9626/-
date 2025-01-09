describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#message').contains('Авторизация прошла успешно');
         cy.get('#message').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        })

    it('Забыли пароль?', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('magura.1886@gmail.ry');
        cy.get('#restoreEmailButton').click();
        cy.get('#message').contains('Успешно отправили пароль на e-mail');
        cy.get('#message').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
       })
       it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('пароль');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#message').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })
       it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('dolnikovgerman@13234.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Такого логина или пароля нет');
        cy.get('#message').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })
       it('Ошибка валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Нужно исправить проблему валидации');
        cy.get('#message').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })
       it('Приведение к строчным буквам', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#message').contains('Авторизация прошла успешно');
        cy.get('#message').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       })
    }) 



    describe('Покупка аватара', function () {                                // название набора тестов
        it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
             cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
             cy.get('input[type="email"]').type('elinalineva@yandex.ru');                   // вводим логин
             cy.get('input[type="password"]').type('MaguR@1996');               // вводим пароль
             cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
             cy.wait(2000);
             cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
             cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
             cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
             cy.get('.credit').type('4911859143735972');                     // вводим номер карты
             cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
             cy.get('.k_input_date').type('1228');                           // вводим срок действия карты
             cy.get('.k_input_name').type('IVAN');                           // вводим имя владельца действия карты
             cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
             cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
             cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
             cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
         });
     });
          