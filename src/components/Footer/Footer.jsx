import Image from 'next/image'
import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer>
          <div className="case">
            <div className="foot">
              <div className="fleft">
                <Image
                alt='some'
                  width={100}
                  height={100}
                  src={"https://files.ox-sys.com/cache/300x_/image/7a/c8/e5/7ac8e543fff1af92be0c9d86d6444fc93fa397a0b2de67fe4ab8d508785c25c7.png"}
                /> <br /><br />
                <b>+998 99 511 48 88</b><br /><br />
                <b>info@gshop.uz</b><br /><br />  
                <div className="app">
                <FaTelegram />
                <IoLogoInstagram />
                <FaFacebook />
                </div>
              </div>
              <div className="fright">
                <div className="line">
                  <h1>Заказ</h1><br />
                  <b>Доставка</b><br /><br />
                  <b>Оплата</b><br /><br />
                  <b>Возврат</b><br /><br />
                  <b>Личный кабинет</b><br /><br />
                </div>
                <div className="line">
                  <h1>G-Shop</h1><br />
                  <b>О нас</b><br /><br />
                  <b>Дисконт и кэшбек от G-Shop</b><br /><br />
                  <b>Политика безопасности</b><br /><br />
                  <b>Контакты G-Shop.uz</b><br /><br />
                  <b>Акции</b>
                </div>
                <div className="line">
                  <h1>Способы оплаты</h1><br />
                  <b>Наличные</b><br /><br />
                  <b>Uzcard Humo</b><br /><br />
                  <b>Payme Click Apelsin</b><br /><br />
                  <b>Visa MasterCard МИ</b><br /><br />
                </div>

              </div>
            </div>
            <div className="fbot">
              <b>Цены указаны с НДС, но без учета стоимости доставки заказа. Copyright © 2022 ООО "G-SHOP DISTRIBUTION" Все права защищены.</b>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer