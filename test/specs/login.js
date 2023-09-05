describe("ecommerce site",async()=>{
    
    it("login",async()=>{
      await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
      await expect (browser).toHaveTitleContaining(" Rahul Shetty Academy");
      const warning = $(".alert-danger")
      const text =  $('//a[@class ="blinkingText"]');
      await console.log(await text.getText());
      (await $('#username')).setValue("rrr");
      (await $('input[name="password"]')).setValue("learning");
      await browser.pause(3000);
      (await $('#signInBtn')).click();
      await console.log((await $(".alert-danger")).getText())
      await browser.waitUntil(async()=>await $('#signInBtn').getAttribute('value') === "Sign In",
      {
      timeout:5000,
      timeoutMsg:"error message is not showing up"
     })
      await console.log(await $(".alert-danger").getText());
      await expect ($("//form//div/p")).toHaveText("(username is rahulshettyacademy and Password is learning)")
    });
      it.only("Demoblaze login",async()=>{
        await browser.url("https://www.demoblaze.com/");
        const homepagetext = $('//a[@id="nava"]');
        const loginpage =$("#logInModalLabel");
        await console.log((await homepagetext).getText());
        (await $("#login2")).click();
        await browser.pause(2000);
        await console.log ((await loginpage).getText());
        (await $("#loginusername")).setValue("ken ab");
        (await $("#loginpassword")).setValue("12344");
        (await $('//button[@onclick="logIn()"]')).click();
        (await $("#nameofuser")).waitForExist();
      });
   
});