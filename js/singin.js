const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function redirectToPage() {
   
    window.location.href = "/index.html";
}


function validateForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // التحقق من أن جميع الحقول معبأة
    if (!firstName || !lastName || !mobile || !email || !password) {
      alert("يرجى ملء جميع الحقول");
      return;
    }

    // التحقق من أن حقل البريد الإلكتروني يحتوي على بريد إلكتروني صالح
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      alert("يرجى إدخال بريد إلكتروني صالح");
      return;
    }

    // التحقق من أن حقل الرقم الهاتفي يحتوي على رقم هاتف صالح
    if (isNaN(mobile) || mobile.length !== 11) {
      alert("يرجى إدخال رقم هاتف صالح مكون من 10 أرقام");
      return;
    }

    // التحقق من طول حقل كلمة المرور
    if (password.length < 6) {
      alert("يجب أن تكون كلمة المرور على الأقل 6 أحرف");
      return;
    }

    
    alert("تم التسجيل بنجاح!");
  }