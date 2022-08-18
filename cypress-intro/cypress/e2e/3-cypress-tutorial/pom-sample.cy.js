/// <reference types="Cypress"/>

import {Login} from "../../page-objects/login";

const login = new Login();

describe('SauceDemo Login sayfasi testi', ()=>{
    it('TC001 - SauceDemo sayfasına git ve basligi dogrula',()=>{
        login.navigate();
        login.title();
    })

    it('TC002 - SauceDemo Basarisiz Login testi', ()=>{
        login.username();
        login.password();
        login.login();
    })
})