import { FC } from "react";

const Home: FC = () => {
  return (
    <div style={{width: '100%', height: '100%', position: 'relative', background: '#111111'}}>
        <div style={{width: '1440px', height: '100px', left: '0px', top: '0px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <div style={{width: '1440px', height: '719px', left: '0px', top: '100px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <div style={{width: '1440px', height: '560px', left: '0px', top: '819px', position: 'absolute', background: '#111111', border: '1px #5A5A5A solid'}} />
        <div style={{width: '1440px', height: '560px', left: '0px', top: '1379px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <div style={{width: '1440px', height: '214px', left: '0px', top: '873px', position: 'absolute'}}>
          <img style={{width: '44px', height: '214px', left: '0px', top: '0px', position: 'absolute'}} src="image/3.jpg" />
          <img style={{width: '301px', height: '214px', left: '74px', top: '0px', position: 'absolute'}} src="image/4.jpg" />
          <img style={{width: '300px', height: '214px', left: '405px', top: '0px', position: 'absolute'}} src="image/5.jpg" />
          <img style={{width: '300px', height: '214px', left: '735px', top: '0px', position: 'absolute'}} src="image/6.jpg" />
          <img style={{width: '301px', height: '214px', left: '1065px', top: '0px', position: 'absolute'}} src="image/7.jpg" />
          <img style={{width: '44px', height: '214px', left: '1396px', top: '0px', position: 'absolute'}} src="image/8.jpg" />
        </div>
        <div style={{width: '1440px', height: '214px', left: '0px', top: '1115px', position: 'absolute'}}>
          <img style={{width: '325px', height: '214px', left: '0px', top: '0px', position: 'absolute'}} src="image/9.jpg" />
          <img style={{width: '350px', height: '214px', left: '355px', top: '0px', position: 'absolute'}} src="image/10.jpg" />
          <img style={{width: '350px', height: '214px', left: '735px', top: '0px', position: 'absolute'}} src="image/11.jpg" />
          <img style={{width: '325px', height: '214px', left: '1115px', top: '0px', position: 'absolute'}} src="image/12.jpg" />
        </div>
        <div style={{width: '1440px', height: '560px', left: '0px', top: '819px', position: 'absolute', background: 'linear-gradient(90deg, rgba(17, 17, 17, 0.50) 0%, rgba(17, 17, 17, 0.85) 25%, #111111 50%, rgba(17, 17, 17, 0.85) 75%, rgba(17, 17, 17, 0.50) 100%)', border: '1px #292929 solid'}} />
        <div className="h" style={{left: '103px', top: '17px', position: 'absolute'}}><span style={{color: 'white', fontSize: '48px', fontFamily: '"Jaini", system-ui', fontWeight: 400, wordWrap: 'break-word'}}>Mongol</span><span style={{color: '#FF6500', fontSize: '48px', fontFamily: 'Jaini', fontWeight: 400, wordWrap: 'break-word'}}>Art</span></div>
        <button>
          <a href="user.html">
            <img style={{width: '25px', height: '25px', left: '1341px', top: '36px', position: 'absolute'}} src="image/user.png" />
          </a>
        </button>
        <div style={{width: '1440px', height: '67px', left: '0px', top: '2190px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
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
        <div>
          <input type="text" placeholder="Хайх" style={{width: '326px', height: '40px', left: '597px', top: '30px', position: 'absolute', background: 'white', borderRadius: '90px', border: 'none'}} />
          <button>
            <img style={{width: '25px', height: '25px', left: '887px', top: '38px', position: 'absolute'}} src="image/search.png" />
          </button>
        </div>
        <div style={{left: '438px', top: '161px', position: 'absolute', textAlign: 'right', color: 'white', fontSize: '40px', fontFamily: '"Open Sans", sans-serif', fontOpticalSizing: 'auto', fontWeight: 700, wordWrap: 'break-word'}}>Та хийх үйлдлээ сонгоно уу?</div>
        <div style={{left: '498px', top: '226px', position: 'absolute', textAlign: 'center', color: 'rgb(190, 190, 190)', fontSize: '22px', fontFamily: '"Open sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Бүртгүүлээд илүү олон зураг үүсгээрэй! 😉</div>
        <div style={{width: '550px', height: '420px', left: '148px', top: '338px', position: 'absolute', background: 'rgba(217, 217, 217, 0)', borderRadius: '10px', border: '1px #292929 solid'}} />
        <div style={{width: '550px', height: '420px', left: '729px', top: '338px', position: 'absolute', background: 'rgba(217, 217, 217, 0)', borderRadius: '10px', border: '1px #292929 solid'}} />
        <a href="main2.html">
          <button>
            <img style={{width: '525px', height: '310px', left: '161px', top: '351px', position: 'absolute', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} src="image/1.jpg" />
          </button>
        </a>
        <a href="main2.html">
          <button><div style={{width: '525px', height: '84px', left: '161px', top: '661px', position: 'absolute', background: '#FF6500', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}} /></button>
        </a>
        <a href="main3.html">
          <button><div style={{width: '525px', height: '84px', left: '742px', top: '661px', position: 'absolute', background: '#FF6500', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}} /></button>
        </a>
        <a href="main3.html">
          <button>
            <img style={{width: '525px', height: '310px', left: '742px', top: '351px', position: 'absolute', borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} src="image/2.jpg" />
          </button>
        </a>
        <a href="main2.html">
          <button>
            <div style={{left: '344px', top: '681px', position: 'absolute', color: 'white', fontSize: '32px', fontFamily: '"Open Sans", sans-serif', fontWeight: 500, wordWrap: 'break-word'}}>Зураг үүсгэх</div>
          </button>
        </a>
        <a href="main3.html">
          <button>
            <div style={{left: '930px', top: '681px', position: 'absolute', color: 'white', fontSize: '32px', fontFamily: '"Open Sans", sans-serif', fontWeight: 500, wordWrap: 'break-word'}}>Зураг засах</div>
          </button>
        </a>
        <div style={{left: '506px', top: '1077px', position: 'absolute', color: 'rgb(190, 190, 190)', fontSize: '36px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Хүссэн зургаа үүсгэх боломж!</div>
        <div style={{left: '355px', top: '1591px', position: 'absolute', color: 'white', fontSize: '40px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Зураг засах</div>
        <div style={{left: '180px', top: '1645px', position: 'absolute'}}><span style={{color: '#737373', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Зургаа илүү </span><span style={{color: '#FF6500', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>чанар</span><span style={{color: '#737373', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>тай болгоорой!</span></div>
        <img style={{width: '746px', height: '500px', left: '635px', top: '1412px', position: 'absolute', opacity: '0.50'}} src="image/13.jpg" />
        <div style={{width: '1440px', height: '250px', left: '0px', top: '1939px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <div style={{left: '103px', top: '1961px', position: 'absolute'}}><span style={{color: 'white', fontSize: '48px', fontFamily: '"Jaini", system-ui', fontWeight: 400, wordWrap: 'break-word'}}>Mongol</span><span style={{color: '#FF6500', fontSize: '48px', fontFamily: 'Jaini', fontWeight: 400, wordWrap: 'break-word'}}>Art</span></div>
        <button>
          <a href="main2.html">
            <div style={{left: '498px', top: '1978px', position: 'absolute', color: '#D9D9D9', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Зураг үүсгэх</div>
          </a>
        </button>
        <button>
          <a href="main3.html">
            <div style={{left: '757px', top: '1978px', position: 'absolute', color: '#D9D9D9', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Зураг засах</div>
            <div style={{left: '757px', top: '2039px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Зураг оруулах</div>
          </a>
        </button>
        <button>
          <a href="main5.html">
            <div style={{left: '1008px', top: '1978px', position: 'absolute', color: '#D9D9D9', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Бидний тухай</div>
            <div style={{left: '1008px', top: '2077px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Бидэнтэй холбогдох</div>
            <div style={{left: '1008px', top: '2039px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Бидний тухай</div>
          </a>
        </button>
        <button>
          <a href="main2.html">
            <div style={{left: '498px', top: '2077px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Аниме зураг</div>
            <div style={{left: '498px', top: '2039px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Энгийн зураг</div>
            <div style={{left: '498px', top: '2115px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Хар зураг</div>
          </a>
        </button>
        <div style={{left: '577px', top: '2209px', position: 'absolute', color: 'white', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>2024 MongolArt | Бүх эрх хуулиар хамгаалагдсан</div>
        <img style={{width: '20px', height: '20px', left: '540px', top: '2213px', position: 'absolute'}} src="image/copyright.png" />
      </div>
  );
}

export default Home