import React from 'react'
import logo from "../images/Logowhite.svg"
import appstore from  "../images/appstore.svg"
import googleplay from  "../images/googleplay.svg"

function Footer() {
  return (
    <footer class="footer-99382 footer ">
<div class="container">
<div class="row">
<div>
<img src={logo} />
<div className='flex appAndgoogle'>
    <img src={googleplay} />
    <img src={appstore} />
</div>
</div>
<div class="col-md footer-pad">
<h3>Разделы</h3>
<ul class="list-unstyled nav-links">
<li><a href="#">Главная</a></li>
<li><a href="#">Расписание</a></li>
<li><a href="#">Игровые отчёты</a></li>
<li><a href="#">Статистика</a></li>
</ul>
</div>
<div class="col-md footer-pad">
<h3>Виды спорта</h3>
<ul class="list-unstyled nav-links">
<li><a href="#">Футбол</a></li>
<li><a href="#">Баскетбол</a></li>
<li><a href="#">Волейбол</a></li>
</ul>
</div>
<div class="col-md footer-pad">
<h3>Полезное</h3>
<ul class="list-unstyled nav-links">
<li><a href="#">Как записаться?</a></li>
<li><a href="#">Ответы на вопросы</a></li>
<li><a href="#">Достижения</a></li>
</ul>
</div>
<div class="col-md footer-pad">
<h3>Чё почём</h3>
<ul class="list-unstyled nav-links">
<li><a href="#">Абонементы</a></li>
<li><a href="#">Корп. клиентам</a></li>
<li><a href="#">Партнёры</a></li>
</ul>
</div>
</div>


<div className='line'></div>


<div>
<div class="col-12 text-center d-flex footer-mobile justify-content-around">
<div class="copyright col-4 mt-1 pt-5">
<p><small>© Все права защищены</small></p>
</div>
<div class="copyright col-4 mt-1 pt-5 d-flex social-links-icons">
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-facebook"></i>
</div>
<div class="copyright col-4  mt-1 pt-5">
<p><small>Cделали в Spans</small></p>
</div>
</div>
</div>


</div>
</footer>
  )
}

export default Footer