
interface IconsProps {
  name: 'Dashboard' | 'Clientes' | 'PIX' | 'Cartão' | 'Boleto' | 'Assinatura' | 'Configuração' | 'Sair';
  color: string
}

export function Icon(props:IconsProps) {
  switch (props.name){
    case 'Dashboard' : 
    return (
      <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
        <path d="M4,13 L10,13 C10.55,13 11,12.55 11,12 L11,4 C11,3.45 10.55,3 10,3 L4,3 C3.45,3 3,3.45 3,4 L3,12 C3,12.55 3.45,13 4,13 Z M4,21 L10,21 C10.55,21 11,20.55 11,20 L11,16 C11,15.45 10.55,15 10,15 L4,15 C3.45,15 3,15.45 3,16 L3,20 C3,20.55 3.45,21 4,21 Z M14,21 L20,21 C20.55,21 21,20.55 21,20 L21,12 C21,11.45 20.55,11 20,11 L14,11 C13.45,11 13,11.45 13,12 L13,20 C13,20.55 13.45,21 14,21 Z M13,4 L13,8 C13,8.55 13.45,9 14,9 L20,9 C20.55,9 21,8.55 21,8 L21,4 C21,3.45 20.55,3 20,3 L14,3 C13.45,3 13,3.45 13,4 Z" fill={props.color}></path>
                    
      </svg>
    );
    case 'Clientes' :
      return (
        <svg width="18px" height="18px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">

        <path fill={props.color} d="M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"></path>
        
        </svg>
      );

    case 'PIX' : 
    return (
    <svg width="20px" height="20px"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="150 260 50 200">
        <g transform="matrix(1.3333333,0,0,-1.3333333,0,700)">
          <g transform="matrix(0.5829914,0,0,0.5829914,-284.91265,-151.3235)" >
              <g> <g transform="translate(782.8699,645.7084)">
                    <path d="m 0,0 c -8.342,0 -16.187,3.248 -22.085,9.144 l -31.89,31.889 c -2.238,2.245 -6.141,2.238 -8.379,0 L -94.36,9.027 c -5.899,-5.895 -13.744,-9.143 -22.086,-9.143 h -6.284 l 40.388,-40.389 c 12.614,-12.613 33.065,-12.613 45.679,0 L 3.842,0 Z"
                    fill={props.color}/>
                    </g>
                    <g
                    id="g996"
                    transform="translate(666.4241,758.5073)">
                    <path
                      d="m 0,0 c 8.342,0 16.187,-3.249 22.085,-9.145 l 32.006,-32.011 c 2.305,-2.305 6.069,-2.315 8.38,0.003 L 94.36,-9.261 c 5.899,5.896 13.744,9.144 22.086,9.144 h 3.841 L 79.783,40.387 c -12.614,12.614 -33.065,12.614 -45.679,0 L -6.283,0 Z"
                      fill={props.color}
                      />
                    </g>
                    <g
                    transform="translate(820.2131,724.8881)">
                    <path
                      d="m 0,0 -24.477,24.477 c -0.539,-0.216 -1.122,-0.351 -1.738,-0.351 h -11.128 c -5.754,0 -11.386,-2.333 -15.451,-6.401 l -31.89,-31.89 c -2.983,-2.984 -6.904,-4.478 -10.822,-4.478 -3.921,0 -7.839,1.494 -10.823,4.475 l -32.009,32.009 c -4.066,4.068 -9.697,6.401 -15.451,6.401 h -13.684 c -0.583,0 -1.129,0.138 -1.644,0.332 L -193.691,0 c -12.614,-12.613 -12.614,-33.064 0,-45.679 l 24.573,-24.573 c 0.515,0.194 1.062,0.332 1.645,0.332 h 13.684 c 5.754,0 11.385,2.333 15.451,6.401 l 32.006,32.006 c 5.785,5.78 15.869,5.783 21.648,-0.003 l 31.89,-31.886 c 4.065,-4.069 9.697,-6.402 15.451,-6.402 h 11.128 c 0.617,0 1.199,-0.134 1.739,-0.35 L 0,-45.679 C 12.614,-33.064 12.614,-12.613 0,0"
                      fill={props.color}
                      />
                      </g>
          
              </g>
          </g>
        </g>
    </svg>
    );


    case 'Cartão' : 
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 600 500">

        <path fill={props.color} d="M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z">
        </path>

      </svg>
    );

    case 'Boleto' :
      return (
        
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="18" height="18" viewBox="0 0 128.000000 128.000000"
>

<g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
fill={props.color} stroke="none">
<path d="M200 1260 c-20 -20 -20 -33 -20 -620 0 -587 0 -600 20 -620 19 -19 33 -20 440 -20 407 0 421 1 440 20 19 19 20 33 20 485 l0 464 -152 3 -153 3 -3 153 -3 152 -284 0 c-272 0 -286 -1 -305 -20z m276 -148 c3 -9 18 -25 35 -34 33 -19 36 -30 14 -51 -12 -12 -21 -13 -43 -5 -16 6 -36 8 -46 5 -32 -12 -16 -37 39 -62 44 -19 59 -32 70 -60 13 -30 13 -39 1 -69 -8 -19 -25 -42 -39 -51 -14 -9 -27 -25 -30 -35 -7 -26 -47 -27 -54 -2 -2 10 -18 23 -34 29 -35 14 -47 39 -27 60 12 12 20 13 36 4 45 -24 92 -8 92 32 0 12 -15 25 -46 38 -63 28 -84 52 -84 95 0 26 7 43 28 62 16 15 31 35 35 45 8 22 48 22 53 -1z m449 -512 l0 -25 -283 -3 c-245 -2 -283 0 -288 13 -4 8 -4 22 0 30 5 13 43 15 288 13 l283 -3 0 -25z m0 -160 l0 -25 -283 -3 c-245 -2 -283 0 -288 13 -4 8 -4 22 0 30 5 13 43 15 288 13 l283 -3 0 -25z"
/>
<path d="M850 1145 l0 -115 115 0 c63 0 115 3 115 8 0 9 -213 222 -223 222 -4
0 -7 -52 -7 -115z"/>
</g>
</svg>
   );


    case 'Assinatura' :
      return (
        <svg  width="18px" height="18px" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          
          <path d="M469.333333 384h170.666667a42.666667 42.666667 0 0 0 0-85.333333h-85.333333V256a42.666667 42.666667 0 0 0-85.333334 0v42.666667a128 128 0 0 0 0 256h85.333334a42.666667 42.666667 0 0 1 0 85.333333H384a42.666667 42.666667 0 0 0 0 85.333333h85.333333v42.666667a42.666667 42.666667 0 0 0 85.333334 0v-42.666667a128 128 0 0 0 0-256h-85.333334a42.666667 42.666667 0 0 1 0-85.333333z m42.666667-341.333333a469.333333 469.333333 0 1 0 469.333333 469.333333A469.333333 469.333333 0 0 0 512 42.666667z m0 853.333333a384 384 0 1 1 384-384 384 384 0 0 1-384 384z"  fill={props.color}/>
        </svg>
      );



    case 'Configuração' : 
    return (
      <svg width="14px" height="14px" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg">
      
      <path d="M512 661.333333A149.333333 149.333333 0 0 1 362.666667 512 149.333333 149.333333 0 0 1 512 362.666667a149.333333 149.333333 0 0 1 149.333333 149.333333 149.333333 149.333333 0 0 1-149.333333 149.333333m317.013333-107.946666c1.706667-13.653333 2.986667-27.306667 2.986667-41.386667 0-14.08-1.28-28.16-2.986667-42.666667l90.026667-69.546666c8.106667-6.4 10.24-17.92 5.12-27.306667l-85.333333-147.626667c-5.12-9.386667-16.64-13.226667-26.026667-9.386666l-106.24 42.666666c-22.186667-16.64-45.226667-31.146667-72.106667-41.813333l-15.786666-113.066667A21.589333 21.589333 0 0 0 597.333333 85.333333h-170.666666c-10.666667 0-19.626667 7.68-21.333334 17.92l-15.786666 113.066667c-26.88 10.666667-49.92 25.173333-72.106667 41.813333l-106.24-42.666666c-9.386667-3.84-20.906667 0-26.026667 9.386666l-85.333333 147.626667c-5.546667 9.386667-2.986667 20.906667 5.12 27.306667L194.986667 469.333333c-1.706667 14.506667-2.986667 28.586667-2.986667 42.666667 0 14.08 1.28 27.733333 2.986667 41.386667l-90.026667 70.826666c-8.106667 6.4-10.666667 17.92-5.12 27.306667l85.333333 147.626667c5.12 9.386667 16.64 12.8 26.026667 9.386666l106.24-43.093333c22.186667 17.066667 45.226667 31.573333 72.106667 42.24l15.786666 113.066667c1.706667 10.24 10.666667 17.92 21.333334 17.92h170.666666c10.666667 0 19.626667-7.68 21.333334-17.92l15.786666-113.066667c26.88-11.093333 49.92-25.173333 72.106667-42.24l106.24 43.093333c9.386667 3.413333 20.906667 0 26.026667-9.386666l85.333333-147.626667c5.12-9.386667 2.986667-20.906667-5.12-27.306667l-90.026667-70.826666z" fill={props.color} />

    </svg>
    );


    case 'Sair' : 
    return (
      <svg width="18px" height="18px" viewBox="100 0 700 1000" xmlns="http://www.w3.org/2000/svg">
        <path d="M768 819.2h-256V204.8L256 102.4h512v102.4h102.4V0H0v819.2l512 204.8v-102.4h358.4v-204.8h-102.4v102.4z"  fill={props.color}/>
        <path d="M1024 460.8l-256-153.6v102.4h-204.8v102.4h204.8v102.4l256-153.6z"  fill={props.color}/>
      
      </svg>
    );
  }
}