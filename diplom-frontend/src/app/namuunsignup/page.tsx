import { FC } from "react"

const Page: FC = () => {
    return (
        <div id="login-box">
        <div className="left">
          <h1>Бүртгүүлэх</h1>
          <input type="text" id="username" name="username" placeholder="Нэвтрэх нэр" />
          <input type="text" id="email" name="email" placeholder="И-мэйл хаяг" />
          <input type="password" id="password" name="password" placeholder="Нууц үг" />
          <input type="submit" id="signUp" name="signup_submit" defaultValue="Бүртгүүлэх" />
        </div>
        <div className="right">
          <span className="loginwith">йййй</span>
          <button className="social-signin facebook">Facebook-р нэвтрэх</button>
          <button className="social-signin twitter">Twitter-р нэвтрэх</button>
          <button className="social-signin google">Google-р нэвтрэх</button>
        </div>
        <div className="or">эсвэл</div>
      </div>
    )
}

export default Page