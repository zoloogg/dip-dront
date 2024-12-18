import { FC } from "react"

const Page: FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* 3 button */}
      <div style={{ marginLeft: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img style={{ width: '40px', height: '40px', left: '115px', top: '140px', marginTop: '30px' }} src="image/create.png" />
          <p style={{ color: '#7C7C7C', fontSize: '14px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700 }}>Үүсгэх</p>
        </div>
        <div>
          <img style={{ width: '40px', height: '40px', left: '115px', top: '140px', marginTop: '50px' }} src="image/rec2.png" />
          <p style={{ color: '#7C7C7C', fontSize: '14px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700 }}>Засах</p>
        </div>
        <div>
          <img style={{ width: '40px', height: '40px', left: '115px', top: '140px', marginTop: '50px' }} src="image/hist2.png" />
          <p style={{ color: '#7C7C7C', fontSize: '14px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700 }}>Түүх</p>
        </div>
      </div>

      {/* goliin bosoo bagana */}
      <div style={{ marginLeft: '60px' }}>
        <div>
          <p style={{ color: 'white', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700 }}>Төрөл сонгох
            <div style={{ color: '#7C7C7C', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, marginTop: '15px' }}>
              <input type="checkbox" />Аниме зураг
            </div>
            <div style={{ color: '#7C7C7C', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, marginTop: '12px' }}>
              <input type="checkbox" />Хар зураг
            </div>
            <div style={{ color: '#7C7C7C', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, marginTop: '12px' }}>
              <input type="checkbox" style={{ background: '#292929', border: '1px white solid' }} />Энгийн зураг
            </div>
          </p>
        </div>


        <div>
          <p style={{ color: 'white', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, marginTop:'20px' }}>Текст оруулах</p>
          <input type="text" placeholder="текст оруулна уу..." style={{width: '184px', height: '140px', background: '#292929', borderRadius: '19px', border: '1px #FF6500 solid', marginTop:'20px'}} />
        </div>

        <div>
          <p>Зургийн тоо</p>
          <form style={{left: '214px', top: '690px', position: 'absolute'}}>
          <input type="text" id="put" style={{width: '20px', height: '20px', color: 'white', border: '#FF6500 1px solid', borderRadius: '25%', backgroundColor: '#292929', marginLeft: '160px', marginTop: '-80px'}} /><br />
          
        </form>
        </div>
      </div>
    </div>
  )
}

export default Page

{/*
  <div style={{width: '100%', height: '100%', position: 'relative', background: '#111111'}}>
        <div style={{width: '1440px', height: '100px', left: '0px', top: '0px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <div style={{width: '1440px', height: '714px', left: '0px', top: '100px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <a href="main.html">
          <button>
            <div style={{left: '103px', top: '17px', position: 'absolute'}}><span style={{color: 'white', fontSize: '48px', fontFamily: 'Jaini', fontWeight: 400, wordWrap: 'break-word'}}>Mongol</span><span style={{color: '#FF6500', fontSize: '48px', fontFamily: 'Jaini', fontWeight: 400, wordWrap: 'break-word'}}>Art</span></div>
          </button>
        </a>
        <button>
          <a href="user.html">
            <img style={{width: '25px', height: '25px', left: '1341px', top: '36px', position: 'absolute'}} src="image/user.png" />
          </a>
        </button>        <button>
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
        <div style={{width: '1440px', height: '250px', left: '0px', top: '814px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <div style={{left: '103px', top: '836px', position: 'absolute'}}><span style={{color: 'white', fontSize: '48px', fontFamily: 'Jaini', fontWeight: 400, wordWrap: 'break-word'}}>Mongol</span><span style={{color: '#FF6500', fontSize: '48px', fontFamily: 'Jaini', fontWeight: 400, wordWrap: 'break-word'}}>Art</span></div>
        <button>
          <a href="main2.html">
            <div style={{left: '498px', top: '853px', position: 'absolute', color: '#D9D9D9', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Зураг үүсгэх</div>
            <div style={{left: '498px', top: '952px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Аниме зураг</div>
            <div style={{left: '498px', top: '914px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Энгийн зураг</div>
            <div style={{left: '498px', top: '990px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Хар зураг</div>
          </a>
        </button>
        <button>
          <a href="main3.html">
            <div style={{left: '757px', top: '853px', position: 'absolute', color: '#D9D9D9', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Зураг засах</div>
            <div style={{left: '757px', top: '914px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Зураг оруулах</div>
          </a>
        </button>
        <button>
          <a href="main5.html">
            <div style={{left: '1008px', top: '853px', position: 'absolute', color: '#D9D9D9', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Бидний тухай</div>   
            <div style={{left: '1008px', top: '952px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Бидэнтэй холбогдох</div>
            <div style={{left: '1008px', top: '914px', position: 'absolute', color: '#7C7C7C', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Бидний тухай</div>     
          </a>
        </button>
        <div style={{width: '1440px', height: '67px', left: '0px', top: '1064px', position: 'absolute', background: '#111111', border: '1px #292929 solid'}} />
        <div style={{left: '577px', top: '1084px', position: 'absolute', color: 'white', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>2024 MongolArt | Бүх эрх хуулиар хамгаалагдсан</div>
        <img style={{width: '20px', height: '20px', left: '540px', top: '1088px', position: 'absolute'}} src="image/copyright.png" />
        <img style={{width: '40px', height: '40px', left: '115px', top: '140px', position: 'absolute'}} src="image/create.png" />
        <div style={{left: '112px', top: '185px', position: 'absolute', color: '#7C7C7C', fontSize: '14px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Үүсгэх</div>
        <a href="main3.html">
          <button>
            <div>
              <img style={{width: '45px', height: '45px', left: '109px', top: '251px', position: 'absolute'}} src="image/rec2.png" />
            </div>
          </button>
        </a>
        <a href="main4.html">
          <button>
            <img style={{width: '45px', height: '45px', left: '111px', top: '367px', position: 'absolute'}} src="image/hist2.png" />
          </button>
        </a>
        <div style={{left: '116px', top: '296px', position: 'absolute', color: '#7C7C7C', fontSize: '14px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Засах</div>
        <div style={{left: '119px', top: '417px', position: 'absolute', color: '#7C7C7C', fontSize: '14px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Түүх</div>
        <div style={{left: '218px', top: '109px', position: 'absolute', color: 'white', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Төрөл сонгох</div>
        <div style={{left: '218px', top: '270px', position: 'absolute', color: 'white', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Текст оруулах</div>
        <div style={{left: '218px', top: '503px', position: 'absolute', color: 'white', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Зургийн хэмжээ</div>
        <div style={{left: '218px', top: '654px', position: 'absolute', color: 'white', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Зургийн тоо</div>
        <div style={{width: '712px', height: '0px', left: '201px', top: '814px', position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #292929 solid'}} />
        <div style={{width: '712px', height: '0px', left: '418px', top: '814px', position: 'absolute', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px #292929 solid'}} />
        <div style={{left: '220px', top: '160px', position: 'absolute', color: '#7C7C7C', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>
          <input type="checkbox" />Аниме зураг
        </div>
        <div style={{left: '220px', top: '189px', position: 'absolute', color: '#7C7C7C', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>
          <input type="checkbox" />Хар зураг
        </div>
        <div style={{left: '220px', top: '219px', position: 'absolute', color: '#7C7C7C', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>
          <input type="checkbox" style={{background: '#292929', border: '1px white solid'}} />Энгийн зураг
        </div>
        <div style={{left: '228px', top: '559px', position: 'absolute', color: '#7C7C7C', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Өндөр</div>
        <div style={{left: '228px', top: '592px', position: 'absolute', color: '#7C7C7C', fontSize: '16px', fontFamily: '"Open Sans", sans-serif', fontWeight: 300, wordWrap: 'break-word'}}>Өргөн</div>
        <div style={{width: '217.08px', height: '0px', left: '201px', top: '260px', position: 'absolute', border: '1px #292929 solid'}} />
        <div style={{left: '472px', top: '138px', position: 'absolute', color: '#FF6500', fontSize: '40px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Зураг зурах хэсэг</div>
        <div style={{width: '217.08px', height: '0px', left: '201px', top: '487px', position: 'absolute', border: '1px #292929 solid'}} />
        <div style={{width: '217.08px', height: '0px', left: '201px', top: '633px', position: 'absolute', border: '1px #292929 solid'}} />
        <div>
          <input type="text" placeholder="текст оруулна уу..." style={{width: '184px', height: '140px', left: '214px', top: '320px', position: 'absolute', background: '#292929', borderRadius: '19px', border: '1px #FF6500 solid'}} />
        </div>
        <div>
          
          <input type="number" style={{width: '116px', height: '18px', left: '282px', top: '558px', position: 'absolute', background: '#292929', borderRadius: '19px', border: '1px #FF6500 solid'}} />
          <input type="number" style={{width: '116px', height: '18px', left: '282px', top: '590px', position: 'absolute', background: '#292929', borderRadius: '19px', border: '1px #FF6500 solid'}} />
        </div>
        <form style={{left: '214px', top: '690px', position: 'absolute'}}>
          <input type="text" id="put" style={{width: '20px', height: '20px', color: 'white', border: '#FF6500 1px solid', borderRadius: '25%', backgroundColor: '#292929', marginLeft: '160px', marginTop: '-80px'}} /><br />
          <input type="range" min={0} max={10} id="get" onchange="fetch()" style={{width: '185px'}} />
        </form>
        <div style={{width: '218px', height: '50px', left: '201px', top: '750px', position: 'absolute', background: '#FF6500'}} />
        <button>
          <a href="user.html">
            <div style={{width: '382px', height: '50px', left: '973px', top: '672px', position: 'absolute', background: '#292929', borderRadius: '21px', border: '1px #FF6500 solid'}} />
          </a>
        </button>
        <div style={{left: '246px', top: '759px', position: 'absolute', color: 'white', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 600, wordWrap: 'break-word'}}>ЗУРАГ ҮҮСГЭХ</div>
        <img style={{width: '427px', height: '250px', left: '472px', top: '230px', position: 'absolute', border: '1px #FF6500 solid'}} src="https://via.placeholder.com/427x250" />
        <img style={{width: '427px', height: '250px', left: '472px', top: '525px', position: 'absolute', border: '1px #FF6500 solid'}} src="https://via.placeholder.com/427x250" />
        <img style={{width: '427px', height: '250px', left: '950px', top: '230px', position: 'absolute', border: '1px #FF6500 solid'}} src="https://via.placeholder.com/427x250" />
        <div style={{left: '973px', top: '567px', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '20px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Та 3 зураг харах боломжтой.<br />Бүртгүүлэн илүү олон зураг үүсгээрэй!</div>
        <button>
          <a href="user.html">
            <div style={{left: '1125px', top: '681px', position: 'absolute', textAlign: 'center', color: 'white', fontSize: '24px', fontFamily: '"Open Sans", sans-serif', fontWeight: 700, wordWrap: 'break-word'}}>Нэвтрэх</div>
          </a>
        </button>
      </div>
*/}