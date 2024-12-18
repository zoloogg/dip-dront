import { FC } from "react"

const Page: FC = () => {
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: '#111111'}}>
        <div style={{width: '1440px', height: '100px', left: '0px', top: '0px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <div style={{width: '1440px', height: '634px', left: '0px', top: '100px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <a href="main.html">
          <button>
            <div style={{left: '103px', top: '17px', position: 'absolute'}}><span style={{color: 'white', fontSize: '48px', fontFamily: 'Jaini', fontWeight: 400, wordWrap: 'break-word'}}>Mongol</span><span style={{color: '#FF6500', fontSize: '48px', fontFamily: 'Jaini', fontWeight: 400, wordWrap: 'break-word'}}>Art</span></div>
          </button>
        </a>        <img style={{width: '25px', height: '25px', left: '1341px', top: '36px', position: 'absolute'}} src="image/user.png" />
        <button>
          <a href="settings.html">
            <img style={{width: '25px', height: '25px', left: '1293px', top: '36px', position: 'absolute'}} src="image/settings.png" />
          </a>
        </button>        
        <button>
          <a href="main4.html">
            <img style={{width: '30px', height: '30px', left: '1247px', top: '35px', position: 'absolute'}} src="image/menu.png" />
          </a>
        </button>
        <div style={{width: '326px', height: '40px', left: '597px', top: '30px', position: 'absolute', background: 'white', borderRadius: '90px'}} />
        <div>
          <input type="text" placeholder="Хайх" style={{width: '326px', height: '40px', left: '597px', top: '30px', position: 'absolute', background: 'white', borderRadius: '90px', border: 'none'}} />
          <button>
            <img style={{width: '25px', height: '25px', left: '887px', top: '38px', position: 'absolute'}} src="image/search.png" />
          </button>
        </div>
        <div style={{width: '1440px', height: '250px', left: '0px', top: '734px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <div style={{left: '103px', top: '756px', position: 'absolute'}}><span style={{color: 'white', fontSize: '48px', fontFamily: 'Jaini', fontWeight: 400, wordWrap: 'break-word'}}>Mongol</span><span style={{color: '#FF6500', fontSize: '48px', fontFamily: 'Jaini', fontWeight: 400, wordWrap: 'break-word'}}>Art</span></div>
        <div style={{left: '498px', top: '773px', position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
          <div style={{color: '#D9D9D9', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Зураг үүсгэх</div>
        </div>
        <div style={{left: '757px', top: '773px', position: 'absolute', color: '#D9D9D9', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Зураг засах</div>
        <div style={{left: '1008px', top: '773px', position: 'absolute', color: '#D9D9D9', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Бидний тухай</div>
        <div style={{left: '498px', top: '872px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Аниме зураг</div>
        <div style={{left: '498px', top: '834px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Энгийн зураг</div>
        <div style={{left: '498px', top: '910px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Хар зураг</div>
        <div style={{left: '1008px', top: '872px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Бидэнтэй холбогдох</div>
        <div style={{left: '1008px', top: '834px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Бидний тухай</div>
        <div style={{left: '757px', top: '834px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Зураг оруулах</div>
        <div style={{width: '1440px', height: '67px', left: '0px', top: '984px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <div style={{left: '577px', top: '1004px', position: 'absolute', color: '#D9D9D9', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>2024 MongolArt | Бүх эрх хуулиар хамгаалагдсан</div>
        <img style={{width: '20px', height: '20px', left: '540px', top: '1008px', position: 'absolute'}} src="image/copyright.png" />
        <div style={{width: '764px', height: '556px', left: '338px', top: '138px', position: 'absolute'}}>
          <div style={{width: '764px', height: '556px', left: '0px', top: '0px', position: 'absolute', background: '#1B1B1B', borderRadius: '20px', border: '3px #FF6500 solid'}} />
          <form method="get">
            <div>
              <label htmlFor="uname">username:</label>
              <input type="text" id="uname" name="username" placeholder="Нэвтрэх нэр" required style={{width: '422px', paddingLeft: '10px', height: '55px', left: '171px', top: '122px', position: 'absolute', color: 'white', background: '#292929', borderRadius: '13px', border: '1px #FF6500 solid'}} />
            </div><br />
            <div>
              <label htmlFor="pass">password:</label>
              <input type="password" id="pass" name="password" placeholder="Нууц үг" required style={{width: '422px', paddingLeft: '10px', height: '55px', left: '171px', top: '198px', position: 'absolute', color: 'white', background: '#292929', borderRadius: '13px', border: '1px #FF6500 solid'}} />
            </div>
            <div style={{width: '422px', height: '55px', left: '0px', top: '319px', position: 'absolute'}}>
              <button type="submit" id="submitt" style={{width: '422px', height: '55px', border: 'none', position: 'absolute', left: '171px', top: '11px', background: '#FF6500', borderRadius: '13px', color: 'white', fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 600, wordWrap: 'break-word'}}>Нэвтрэх</button>
            </div>
          </form>
          <div style={{left: '317px', top: '33px', position: 'absolute', color: 'white', fontSize: '32px', fontFamily: 'Open Sans', fontWeight: 600, wordWrap: 'break-word'}}>Нэвтрэх</div>
          <div style={{width: '422px', height: '0px', left: '171px', top: '289px', position: 'absolute', border: '1px #292929 solid'}} />
          <div style={{width: '422px', height: '55px', left: '171px', top: '395px', position: 'absolute'}}>
            <a href="signup.html">
              <button style={{width: '422px', border: 'none', height: '55px', left: '0px', top: '0px', position: 'absolute', background: '#FF6500', borderRadius: '13px'}}>
                <div style={{left: '145px', top: '6px', position: 'absolute', color: 'white', fontSize: '24px', fontFamily: 'Open Sans', fontWeight: 600, wordWrap: 'break-word'}}>Бүртгүүлэх</div>
              </button>
            </a>
          </div>
          <a href="forgot.html">
            <button style={{left: '299px', backgroundColor: '#1B1B1B', border: 'none', top: '491px', position: 'absolute', color: 'white', fontSize: '20px', fontFamily: 'Open Sans', fontWeight: 600, wordWrap: 'break-word'}}>Нууц үг мартсан</button>
          </a>
        </div>
      </div>
    )
}

export default Page