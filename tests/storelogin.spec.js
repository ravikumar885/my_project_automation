import { test } from '@playwright/test';
import { loginpage } from './pages/loginpage.js';
import { category } from './pages/category.js';
import getorder from './pages/getorder.js';


test('login to demoblaze', async ({page})=>{
    const login=new loginpage(page);
    await login.launchapplication();
    await login.login();
   // await login.verifylogin();
   const cat=new category(page);
   await cat.verifycategorylist();
   await cat.clickongalaxy();
   await cat.addtocartList();

   page.on('dialog', async dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept();
  });

  await cat.verifycartlist();
  const order=new getorder(page);
  await order.clickonPlaceorder();

});

