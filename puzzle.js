
//ブロック
block=[
    [   
        //ブロック0
        [
        [0,0,0,0],
        [1,1,1,0],
        [0,1,0,0],
        [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [0,1,1,0],
            [0,1,0,0],
            [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [1,1,1,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [1,1,0,0],
            [0,1,0,0],
            [0,0,0,0]
        ]
    ],
    [   
        //ブロック1
        [
        [0,0,0,0],
        [1,1,1,0],
        [1,0,0,0],
        [0,0,0,0]
        ],
        [
            [1,0,0,0],
            [1,0,0,0],
            [1,1,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,0,1,0],
            [1,1,1,0],
            [0,0,0,0]
        ],
        [
            [1,1,0,0],
            [0,1,0,0],
            [0,1,0,0],
            [0,0,0,0]
        ]
    ],
    [   
        //ブロック2
        [
        [0,0,0,0],
        [1,1,0,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [1,1,0,0],
            [1,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [1,1,0,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [1,1,0,0],
            [1,0,0,0],
            [0,0,0,0]
        ]
    ],
    [   
        //ブロック3
        [
        [0,0,0,0],
        [0,1,1,0],
        [1,1,0,0],
        [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [1,1,0,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [1,0,0,0],
            [1,1,0,0],
            [0,1,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,0,0],
            [1,1,0,0],
            [1,0,0,0]
        ]
    ],
    [   
        //ブロック4
        [
        [0,1,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,1,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ],
    [   
        //ブロック5
        [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0]
        ],
        [
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0]
        ],
        [
            [0,0,0,0],
            [1,1,1,1],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0],
            [0,0,1,0]
        ]
    ],
    [   
        //ブロック6
        [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ]
    ]
    ];
    
    //ブロック色
    biro=['#CC00CC','#FFA500','#CC0000','#00CC00','#CC0000','#CCCC00']
    // biro=[rgb(214, 122, 127),rgb(214, 122, 127),rgb(214, 122, 127),rgb(214, 122, 127),rgb(214, 122, 127),rgb(214, 122, 127)]
    
function tsugiwotsukuru(){
    //next block
    btsugi = Math.floor(Math.random() * 7);


    tsugigamen=document.getElementById('tsugi');
    ct=tsugigamen.getContext('2d');
    ct.clearRect(0, 0, 79, 79);

    //描画
    kaku(ct, 0, 0, 0, btsugi);
}

function kakunin(bx, by, muki, shurui){
    p = block[shurui][muki];
    for(n = 0; n < 4; n++){
        for(m = 0; m < 4; m++){
            if(p[n][m] === 1){
                //空欄か調べる
                //x
                if((bx + m < 0) || (bx + m > 11)){
                    return false;
                }
                //y
                if((by + n < 0) || (by + n > 21)){
                    return false;
                }
                //空欄でなければ置けない
                if(jyoutai[by + n][bx + m] != 100){
                    return false;
                }
            }
        }

    }
    return true;
}
function shitaidou(){
    //下に移動
    gamegamen =  document.getElementById('game');
    cg = gamegamen.getContext('2d');
    //current position
    maenoix = ix;
    maenoiy = iy;
    maenoimuki = imuki;
    //erase
    kesu(cg, ix, iy, imuki, ishurui);

    //moving
    iy = iy + 1;

    //get sound
    document.getElementById('ochiru').play();
    //移動できるか確認
    kekka = kakunin(ix, iy, imuki, ishurui);

    if (kekka){
        //移動できる
        //new position
        kaku(cg, ix, iy, imuki, ishurui);
    } else {
        //移動できない
        //移動前の場所・向き
        ix = maenoix;
        iy = maenoiy;
        imuki = maenoimuki;
        kaku(cg, ix, iy, imuki, ishurui);
    
        //この位置をあたり判定用の配列に設定
        p = block[ishurui][imuki]
        for (n = 0; n < 4; n++){
            for ( m = 0; m < 4; m++){
                if(p[n][m] === 1){
                    jyoutai[iy + n][ix + m] = ishurui;
                }
            }
        }
        //sound
        document.getElementById('don').play();

        //erase line and caluculate score
        tokutenkeisan()
        //next block
        ix = 4;
        iy = 0;
        ishurui = btsugi;
        imuki = 0;
        kaku (cg, ix, iy, imuki, ishurui);

        kekka = kakunin(ix, iy, imuki, ishurui);
        if(!kekka){
           document.getElementById('gameover').play();
           alert('ゲームオーバー');

           jikkou = false;
        }



        //さらに次のblockを設定
        tsugiwotsukuru();
    }
    jikan = jikan -1;
    if(jikan < 50){
        jikan = 1000;
    }
}
    
    
function ugokasu(e){
    //描くcanvas取得
    gamegamen = document.getElementById('game');
    cg = gamegamen.getContext('2d');

    //cuurent x,y memory
    maenoix = ix;
    maenoiy = iy;
    maenoimuki = imuki;

    //いまのブロックを消す
    kesu(cg, ix, iy, imuki, ishurui);

    if (e.keyCode === 39) {
        //右へ
        ix = ix + 1;
        //音
        document.getElementById('kaiten').play();
    }

    if (e.keyCode === 37){
        ix = ix-1;
        document.getElementById('kaiten').play();
    }

    //↑
    if(e.keyCode === 38){
        //回転
        imuki = imuki + 1;
        if(imuki > 3){
            imuki = 0;
        }
        //sound
        document.getElementById('kaiten').play();
        }
    if (e.keyCode === 40){
        shitaidou();
    }

        //移動・回転確認
    kekka = kakunin(ix, iy, imuki, ishurui);
    if(!kekka){
        //回転・移動できない
        //元に戻す
        ix = maenoix;
        iy = maenoiy;
        imuki = maenoimuki;
    }
    //新しい場所にブロック
    kaku(cg, ix, iy, imuki, ishurui);
}
    
    
function kesu(c, bx, by, muki, shurui){
    //消す処理
    c.globalCompositeOperation = 'destination-out';
    //描く（実際は消える）
    kaku(c, bx, by, muki, shurui);
    //元の描く処理
    c.globalCompositeOperation = 'source-over';
}
    
function kaku(c, bx, by, muki, shurui){
    // c.clearRect(0, 0, 239, 439);

    //ブロック色と線
    c.fillStyle = biro[shurui];
    c.strokeStyle = '#333333';
    c.lineWidth = 3;

    //パターン
    p = block[shurui][muki]
    //描く
    for (n=0; n<4; n++){
        for (m = 0; m < 4; m++){
            //描くかどうか
            if(p[n][m] === 1){
                c.fillRect((bx + m) * 20,(by+n) * 20, 20, 20);
                c.strokeRect((bx + m) * 20,(by + n ) * 20, 20, 20);              
        }
    }
 }
}
    
    
    
    
    //current block type
jyoutai = [];


function tokutenkeisan() {
    kosuu = 0;

    //全ラインチェック
    for (y = 0; y < 21; y++) {
        sorottenai = false;
    
        

        for (x = 1; x <= 10; x++) {
            // console.log(jyoutai[y][x])
            if ((jyoutai[y][x] === 100)) {
                //ブロックがない
                sorottenai = true;
                console.log(sorottenai)
            }
        }
                    if (!sorottenai) {
                        //そろってる
                        
                        kosuu = kosuu + 1;

                        //sound
                        document.getElementById("kieru").play()

                        //上からつめる
                        for (k = y; k > 0; k--){
                            for(x = 1; x <= 10; x++){
                                jyoutai[k][x] = jyoutai[k-1][x];
                            }
                        }
                    }
                }
    

                        //ブロックを全部描き直す
                        //1.キャンバスを取得
                        gamegamen = document.getElementById('game');
                        cg = gamegamen.getContext('2d');

                        //2.全部消す
                        cg.clearRect(0, 0, 239, 439);
                        //3.ブロックがあるところを描く
                        for (y = 0; y < 22; y++){
                            for (x = 0; x < 22; x++){
                                if((jyoutai[y][x] != 100) && (jyoutai[y][x] != 99)){
                                    //ブロックを描く
                                    cg.fillStyle = biro[jyoutai[y][x]];
                                    cg.strokeStyle = '#333333';
                                    cg.lineWidth = 3;
                                    cg.fillRect(x * 20, y * 20, 20, 20);
                                    cg.strokeRect(x * 20, y * 20, 20, 20);
                                }
                            }
                        }
                        //write score
                        switch(kosuu){
                            case 1:
                                tokuten = tokuten + 10;
                                break;
                            case 2:
                                tokuten = tokuten + 20;
                                break;
                            case 3:
                                tokuten = tokuten + 100;
                                break;
                            case 4:
                                tokuten = tokuten + 1000;
                                // in case of case 4
                                document.getElementById('zenbu').play();
                                break;
                                
                        }
                        //display score
                        tgamen = document.getElementById('tokuten');
                        tgamen.innerHTML = tokuten;
                        }
                    
    function jikandeugokasu(){
        if(jikkou){
            //実行中
            //下に動かす
            shitaidou();
            //next time setting
            setTimeout(jikandeugokasu, jikan);
        }
        
    }
    
    
function gamekaishi(){
        gamegamen = document.getElementById("game");
        cg = gamegamen.getContext('2d');


        //画面けす
        cg.clearRect(0, 0, 239, 439);

        //score
        tokuten = 0;

        //タイマー
        jikkou = true;
        jikan = 1000;
        setTimeout(jikandeugokasu, jikan);
        
            jyoutai = new Array(22);
            for(i = 0; i < 22; i++){
                jyoutai[i] = new Array(12);
                for(j = 0; j < 12; j++){
                    jyoutai[i][j] = 100;
                }
            }
            //setting left wall
            for (i = 0; i < 22; i++){
                jyoutai[i][0] = 99;
            }
            //setting right block
            for (i = 0; i < 22; i++){
                jyoutai[i][11] = 99;
            }
            //setting bottom block
            for(i = 0; i < 12; i++){
                jyoutai[21][i] = 99;
            }
            //ランダム
            
            ix = 4;
            iy = 0;
            imuki = 0;
            ishurui = Math.floor(Math.random() * 7);

            //next block
            tsugiwotsukuru();

        }
    
function hajime() {

        //背景canvas取得
     
        backgamen = document.getElementById("back");
        cd = backgamen.getContext('2d');

        //塗り色
        cd.fillStyle = "#CCCCCC";

        //線を設定
        cd.strokeStyle = '#333333';
        cd.lineWidth = 3;

        //左壁を描く
        x = 0;
        y = 0;
    
            

            for(i = 0; i < 22; i++) {
                cd.fillRect(x, y, 20, 20);
                cd.strokeRect(x, y, 20, 20);
                y = y + 20;
            }
            //右壁
            x = 220;
            y = 0;

            for (i = 0; i < 22; i++){
                cd.fillRect(x, y, 20, 20);
                cd.strokeRect(x, y, 20, 20);
                y = y + 20;
            }
            //下側
            x = 0;
            y = 420;

            for (i = 0; i < 22; i++){
                cd.fillRect(x, y, 20, 20);
                cd.strokeRect(x, y, 20, 20);
                x = x + 20;

            }

        }
    