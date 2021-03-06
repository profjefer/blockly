'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');
// Electron window
Blockly.Msg.com1 = "Selecione a porta USB";
Blockly.Msg.com2 = "🔔 Selecione a porta USB" ;
Blockly.Msg.check = "Compilar...";
Blockly.Msg.upload = "Enviar...";
Blockly.Msg.error = "🔔 ERRO: Blocos não conectados";
Blockly.Msg.verif = "🔔 Confira o código primeiro "
Blockly.Msg.save = "Salvar como ...";
Blockly.Msg.update = "Atualizar";
Blockly.Msg.new_update = "Uma nova versã está disponível, você quer baixar e instalar agora?" ;
Blockly.Msg.yes = "sim";
Blockly.Msg.no = "não";
Blockly.Msg.uptodate = "💯 Versão atualizada!" ;
Blockly.Msg.download = "Download completo, a aplicação irá instalar e reiniciar ..."
// common to all blocks
Blockly.Msg.HELPURL = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pin = "no pino";
Blockly.Msg._AT = "até";
Blockly.Msg.AV = "frente";
Blockly.Msg.AR = "para trás";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "direita";
Blockly.Msg.left = "esquerda";
Blockly.Msg.LetR = "direita & esquerda";
Blockly.Msg.direction = "direção";
Blockly.Msg.vitesse = "velocidade ";
// categories (menu)
Blockly.Msg.CAT_STOCKAGE = "⊞ Armazenamento";
Blockly.Msg.CAT_numerique = "- Digital";
Blockly.Msg.CAT_analogique = "~ Analog";
Blockly.Msg.CAT_wifi = "＠ Wifi";
Blockly.Msg.CAT_TAB = "▦ Table";
Blockly.Msg.CAT_list = "▤ Lista";
Blockly.Msg.CAT_servo = "↷ Servo";
Blockly.Msg.CAT_del = "☄ LED";
Blockly.Msg.CAT_LOGIC = "⇋ Logic";
Blockly.Msg.CAT_MATH = "∑ Math";
Blockly.Msg.CAT_TEXT = "❝ Text";
Blockly.Msg.CAT_VARIABLES = "↝ Variável";
Blockly.Msg.CAT_FUNCTIONS = "∬ Função";
Blockly.Msg.CAT_ARDUINO = "∞ Estrutura";
Blockly.Msg.CAT_ARDUINO_IN = "⇅ Entrada/Saída";
Blockly.Msg.CAT_ARDUINO_OUT = "☺ Fechar";
Blockly.Msg.CAT_ARDUINO_TIME = "◌ Time";
Blockly.Msg.CAT_actionneur = "↻ Motor";
Blockly.Msg.CAT_com = "☎ Comunicação";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "- Serial";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "- Soft Serial";
Blockly.Msg.CAT_ARDUINO_moteur="↻ Motor DC";
Blockly.Msg.CAT_ultrason = "⇣ Sensor";
Blockly.Msg.CAT_bluetooth = "☏ Bluetooth";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "░ LED Mouth";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ LED Eyes";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "▀ LCD Screen";
Blockly.Msg.CAT_iot = "☁ IoT";
Blockly.Msg.CAT_html = "✉ HTML";
Blockly.Msg.CAT_DFPLAYER = "♫ Audio";
Blockly.Msg.CAT_OTTO = "⊟ Otto";
Blockly.Msg.CAT_OTTOH = "⊟ Humanoide";
Blockly.Msg.CAT_OLED_U8G = "▀ OLED";
//Wireless
Blockly.Msg.esp8266_init_tooltip = "Inicialização do módulo wifi e conexão com o indicador de parâmetros";
Blockly.Msg.esp8266_1 = "Esp 8266";
Blockly.Msg.esp8266_2 = "SSID";
Blockly.Msg.esp8266_3 = "key";
Blockly.Msg.esp8266_4 = "IP";
Blockly.Msg.esp8266_5 = "gateway";
Blockly.Msg.esp8266_6 = "mask";
Blockly.Msg.esp8266_7 = [["client", "client"], ["server", "server"]];
Blockly.Msg.esp8266_8 = "port";
Blockly.Msg.esp8266_9 = [["dynamic", "dynamic"], ["static", "static"]];
Blockly.Msg.esp8266_10 = "address";
Blockly.Msg.esp8266_recept_tooltip = "reception";
Blockly.Msg.esp8266_url = "https://github.com/OttoDIY/esp";
Blockly.Msg.esp8266_html_tooltip = "";
Blockly.Msg.esp8266_send_html_tooltip = "";
Blockly.Msg.esp8266_send_html = "enviar página HTML";
Blockly.Msg.esp8266_start_tooltip = "";
Blockly.Msg.esp8266_start = "iniciar servidor";
Blockly.Msg.esp8266_request_tooltip = "";
Blockly.Msg.esp8266_request = "se na consulta contiver";
Blockly.Msg.esp8266_request_container = "nós encontramos";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = 'Interromper: quando um ';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "desabilitar interromper no pin";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "Especificiar uma ação a ser tomada quando for interrompido externamente (4 possíveis modos) ocorre no pino 2 ou 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = "Desabilitar o interruptor externo anterior";
Blockly.Msg.LKL_MODE = 'é detectado no pin';
// FIELDDROPDOWN
Blockly.Msg.note = [[ "DO \u2083", "261"], [ "RE \u2083", "293"], [ "MI \u2083", "329"], [ "FA \u2083", "349"], [ "SOL \u2083", "392"], [ "LA \u2083", "440"], [ "SI \u2083", "493"], [ "DO \u2084", "523 "], [" RE \u2084 "," 587 "], [" MI \u2084 "," 659 "], [" FA \u2084 "," 698 "], [" SOL \u2084 "," 784 "], [ "LA \u2084", "880"]];
Blockly.Msg.tempo = [["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"], ["white", "1000"], ["round", "2000"]];
Blockly.Msg.on_off = [["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink = [["slowly", "1000"], ["fast", "100"]];
Blockly.Msg.AV_AR = [[Blockly.Msg.AV, "FORWARD"], [Blockly.Msg.AR, "BACKWARD"]]; // do not translate
Blockly.Msg.times = [["segundos", "s"], ["millisegundos", "m"], ["microsegundos", "u"]];
Blockly.Msg.time = [["segundos", "s"], ["millisegundos", "m"]];
Blockly.Msg.char_lcd = [[ "# 1", "1"], [ "# 2", "2"], [ "3", "3"], [ "# 4", "4"], [ "# 5", "5"], [ "# 6", "6"], [ "No. 7", "7"], [ "# 8", "8 "]];
Blockly.Msg.rxtx = [[ "2", "2"], [ "3", "3"], [ "4", "4"], [ "5", "5"], [ "6 "," 6 "], [" 7 "," 7 "], [" 8 "," 8 "], [" 9 "," 9 "], [" 10 "," 10 "], [" 11 "," 11 "], [" 12 "," 12 "], [" 13 "," 13 "]];
Blockly.Msg.FIELDDROPDOWN = [["1(high state)", Blockly.Msg.high], ["0(low state)", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["UP", Blockly.Msg.high], ["DOWN", Blockly.Msg.low]];
Blockly.Msg.ligne = [["1", "0"], ["2", "1"]];
Blockly.Msg.colonne = [[ "1", "0"], [ "2", "1"], [ "3", "2"], [ "4", "3"], [ "5 "," 4 "], [" 6 "," 5 "], [" 7 "," 6 "], [" 8 "," 7 "], [" 9 "," 8 "], [" 10 "," 9 "], [" 11 "," 10 "], [" 12 "," 11 "], [" 13 "," 12 "], [" 14 "," 13 "], [" 15 "," 14 "], [" 16 "," 15 "]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["ligar", Blockly.Msg.high], ["desligar", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice = [["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar = [[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR, Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN = [['borda ascendente', 'RISING'], ['borda de queda', 'FALLING'], ['estado de mudança', 'CHANGE'], ['low state', Blockly. Msg.low]];
Blockly.Msg.irq = [['borda ascendente', 'Pin.IRQ_RISING'], ['borda de queda', 'Pin.IRQ_FALLING'], ['high state', 'Pin.IRQ_HIGH_LEVEL'], ["low state "," Pin.IRQ_LOW_LEVEL "]];
Blockly.Msg.menudht = [["umidade", "h"], ["temperatura", "t"]];
Blockly.Msg.couleur = [["azul", "blue"], ["amarelo", "yellow"], ["vermelho", "red"], ["verde", "green"]];
Blockly.Msg.sens = [["frente", "a"], ["vire a direita", "d"], ["vire a esquerda", "g"]];
//sensor
Blockly.Msg.VL53L0X="Sensor de distância laser";
Blockly.Msg.VL53L0X_tooltip="inicializar sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance="distância medida pelo laser";
Blockly.Msg.VL53L0X_distance_tooltip="VL530X :\nretornar distância medida pelo laser em mm";
Blockly.Msg.bme280="Sensor de pressão atmosférica";
Blockly.Msg.bme280_tooltip="inicializar sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.bme280_pressure="pressão atmosférica";
Blockly.Msg.bme280_pressure_tooltip="BME280 :\nretornar pressão atmosférica em hPa";
Blockly.Msg.inter="switch is";
Blockly.Msg.inter_tooltip="retorna true (false) se a seleção é (não é) na posição indicada";
Blockly.Msg.mc005="presença detectada no pin";
Blockly.Msg.mc005_tooltip="MC005:\nretorna true (false) se a presença é (não é) detectada";
Blockly.Msg.bp = "botão pressionado no pin";
Blockly.Msg.bp_tooltip = "retorna true (false) se um botão é (não é) pressionado";
Blockly.Msg.dht11_tooltip="DHT11 :\nretorna a umidade do ar (de 20 até 80%) ou \n a temperatura (de 2 até 50�C)";
Blockly.Msg.dht22_tooltip = "DHT22: \nretorna a umidade do ar (de 0 até 100%) ou \n a temperatura (de -40 até 80 � C)";
Blockly.Msg.suiveur_ligne = "linha preta detectada no pin";
Blockly.Msg.suiveur_ligne_tooltip = "CAP227: \nreturns true (false) if a black line is (is not) detected";
Blockly.Msg.light = "brilho no0 pin";
Blockly.Msg.light_tooltip = "retorna o valor dependendo do brilho \n0: escuro \n255: claro";
Blockly.Msg.hum = "umidade do solo no pin";
Blockly.Msg.hum_tooltip = "CAP 615: \nretorna umidade do solo de 0 até 100%";
Blockly.Msg.light_tooltip = "retorna o valor dependendo do brilho \n0: escuro \n255: claro";
Blockly.Msg.grove_ldr = "brilho no pin";
Blockly.Msg.grove_ldr_tooltip = "retorna a medida de brilho \n0: sem brilho \n100: brilho intenso";
Blockly.Msg.potar = "posição do cursor no pin";
Blockly.Msg.potar_tooltip = "retorna o valor baseado na posição do cursor \n0: cursor esquerdo \n255: cursor direito";
Blockly.Msg.lm35 = "temperatura no pin";
Blockly.Msg.lm35_tooltip = "LM35: \nretorna a medida de temperatura em graus celcius (de 0 até 80 �)";
Blockly.Msg.ultrason_1 = "distancia < limite";
Blockly.Msg.ultrason_2 = "retorna um estado Alto se a medida de distância for menor do que o limite";
Blockly.Msg.ultrason_distance1 = "distância medida por ultrasom";
Blockly.Msg.ultrason_tooltip = "HC-SR04: \nSensor de som capaz de medir distância (de 3 cm e 4 m) \nindicando os pins do Arduino para ser conectado TRIG e ECHO";
Blockly.Msg.ultrason = "ultrasom pins";
Blockly.Msg.ultrason_distance2 = "HC-SR04: \nretorna a distância medida em cm pelo detector ultrasom";
Blockly.Msg.ultrason_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pir = "movimento detectado ";
Blockly.Msg.feu = "fogo detectado ";
Blockly.Msg.presence = "obstáculo detectado ";
Blockly.Msg.appui = "touch ";
Blockly.Msg.pir_tooltip = "HC-SR501: \nretorna true (false) se a presença é (não é) detectada";
Blockly.Msg.feu_tooltip = "CAP168: \nretorna true (false) se fogo for (não for) detectado";
Blockly.Msg.presence_tooltip = "CAP711: \nretorna true (false) se um contato teve (não teve) tomado lugar";
Blockly.Msg.appui_tooltip = "CAP831: \nretorna true (false) se um suporte é (não é) detectado";
// bluetooth
Blockly.Msg.bluetooth1 = "se os dados recebidos por bluetooth";
Blockly.Msg.bluetooth1_tooltip = "recepção de dados por bluetooth\nconectando módulo HC-06 para pins 0 e 1 \net cross Rx e Tx pins";
Blockly.Msg.bluetooth2 = "send by bluetooth";
Blockly.Msg.bluetooth2_tooltip = "envia dados via bluetooth \nconectando módulo HC-06 para pins 0 e 1 \net cross pins Rx e Tx";
Blockly.Msg.bluetooth_init_tooltip = "";
Blockly.Msg.bluetooth_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy-plus"; // do not translate
//LCD screen
Blockly.Msg.lcd_fond = "bottom";
Blockly.Msg.LCD = "LCD screen";
Blockly.Msg.LCDi2c_tooltip = "initializes the 2-line, 16-character I2C LCD with RGB backlight. \n Displayer <-> Arduino \nSDA <--------> A4 \nSCL <- -------> A5 ";
Blockly.Msg.LCD_tooltip = "initializes the LCD, 2 lines and 16 characters, indicating the pins to connect";
Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "https://www.arduino.cc/en/Tutorial/HelloWorld";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "show on LCD";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip = "display the text in the specified location";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "write the text (s) on the LCD screen";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "line 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "line 2";
Blockly.Msg.LCD_line = "line";
Blockly.Msg.LCD_col = "column";
Blockly.Msg.LCD_raz = "erase the LCD screen";
Blockly.Msg.LCD_raz_tooltip = "clear screen";
Blockly.Msg.lcd_aff_symbole = "display the symbol";
Blockly.Msg.lcd_aff_symbole_tooltip = "show the symbol that has been defined before";
Blockly.Msg.lcd_symbole = "define the symbol";
Blockly.Msg.lcd_symbole_tooltip = "definition of a character for the LCD: \n 0 turns off a pixel \n 1 lights a pixel";
// structure
Blockly.Msg.loop = "∞ Laço";
Blockly.Msg.init = "⚙️ Configuração";
Blockly.Msg.base_setup_loop = "A função de inicialização: \nIsso é usado para incializar as variaveis,a direção dos pins ... \nIsso é executado uma vez \nO laço da função: \nEsta é parte principal do programa, todos os blocos colocados aqui no laço irão rodar indefinidamente (várias vezes por segundo) ";
Blockly.Msg.loop_tooltip = "todos os blocos colocados aqui no laço irão rodar indefinidamente (várias vezes por segundo)";
Blockly.Msg.begin_tooltip = "esse bloco é usado para definir a ordem em que o programa pode ser executado";
Blockly.Msg.begin = "🏁 INICIO";
Blockly.Msg.def = "⚙️ Declaração";
Blockly.Msg.def_tooltip = "todos os blocos colocados aqui serão executados uma única vez, aqui é onde diferentes sensores e autuadores são configurados";
Blockly.Msg.END = "🏁 FIM";
Blockly.Msg.END_tooltip = "Pare o programa, blocos colocados depois serão ignorados";
Blockly.Msg.code_tooltip = "Digite aqui uma instrução que não esteja em blocos";
//matrix
Blockly.Msg.matriceLC = "coloca o LED, linha";
Blockly.Msg.matrice_create_aff = "Cria o bloco 'display symbol %1'";
Blockly.Msg.matrice_create_symbole = "Cria o bloco 'set the symbol %1'";
Blockly.Msg.matrice = "matrix";
Blockly.Msg.matrice8x8_tooltip = "Inicialização da matriz de 64 LEDs, é necessário indicar os pins do arduino para o qual será conectado DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole = "define o simbolo";
Blockly.Msg.matrice8x8_symbole_tooltip = "definição de simbolo para a matriz: \n 0 desliga um LED \n 1 liga um LED";
Blockly.Msg.matrice8x8_efface = "limpar a matriz";
Blockly.Msg.matrice8x8_aff = "mostrar o simbolo";
Blockly.Msg.matrice8x8_binaire_tooltip = "1 ligar um LED da matriz e 0 desliga-lo";
Blockly.Msg.matrice8x8_del_tooltip = "Ligar (desligar) um LED nas coordenadas indicadas do array \nAtenção, array inicia em 0";
Blockly.Msg.matrice8x8_aff_tooltip = "Mostrar o simbolo anterior definido";
Blockly.Msg.matrice8x8_efface_tooltip = "Desligar todos os LEDs na matriz";
Blockly.Msg.matrice8x8_helpurl = "https://wikifactory.com/+OttoDIY/humanoid";
Blockly.Msg.matrice16x8_tooltip = "Inicialização do array para 128 LEDs. \nMatriz <-> Arduino \nSDA <--------> A4 \nSCL <--------> A5";
Blockly.Msg.matrice16x8_symbole = "definição do simbolo";
Blockly.Msg.matrice16x8_symbole_tooltip = "definição do simbolo para a matriz: \n 0 desligar um LED \n 1 ligar um LED";
Blockly.Msg.matrice16x8_efface = "desligar um LEDs da matriz";
Blockly.Msg.matrice16x8_aff = "mostrar o simbolo";
Blockly.Msg.matrice16x8_binaire_tooltip = "1 liga um LED da matriz e 0 desliga ele";
Blockly.Msg.matrice16x8_del_tooltip = "Liga (desliga) um LED na indicação das coordenadas da matriz \nAtenção inicia em 0";
Blockly.Msg.matrice16x8_aff_tooltip = "Mostrar o simbolo anterior definido";
Blockly.Msg.matrice16x8_efface_tooltip = "Desligar todos os LEDs na matriz";
Blockly.Msg.matrice16x8_helpurl = "";
//time
Blockly.Msg.millis ="tempo decorrido em";
Blockly.Msg.millis_start="iniciar uma cronometragem em";
Blockly.Msg.millis_tooltip="";
Blockly.Msg.millis_start_tooltip="";
Blockly.Msg.ARDUINO_INOUT_Pulsein = "retorna a duração em microsegundos de UP ou DOWN de pulso aplicado ao pin.Se o valor do parâmetro for HIGH, o bloco esperando pelo pin para ir para HIGH, começa então o tempo, espera pelo pin para voltar para LOW level e então para o tempo ";
Blockly.Msg.ARDUINO_BASE_DELAY = "⏲ wait";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Especificar o tempo de espera em segundos, millisegundos ou microsegundos. \nO programa não fará nada enquanto isso";
Blockly.Msg.millis1 = "duração em";
Blockly.Msg.millis2 = "do inicio";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "returns the duration in milliseconds, seconds or microseconds since the program started";
Blockly.Msg.ARDUINO_PULSEIN = "state duration";
Blockly.Msg.tempo_helpurl = "https://www.arduino.cc/en/tutorial/blink";
Blockly.Msg.tempo_tooltip = "This block checks if the indicated time has arrived, if it is the case then it executes the blocks placed inside .. Unlike the block 'to wait' this one is not blocking." ;
Blockly.Msg.tempo1 = "all";
//OLED
Blockly.Msg.lp2i_u8g_draw_string = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_string_Text = "text to display =";
Blockly.Msg.lp2i_u8g_draw_string_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_draw_4strings = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "texts to display :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_print_N = "Number to display ="
Blockly.Msg.lp2i_u8g_print_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_4draw_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "to display :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Number 1 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Number 2 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Number 3 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Number 4 (at end) ="
// LED
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "the LED on the board";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "Turn off or turn on the LED on the Arduino board";
Blockly.Msg.blink = "blink the board LED";
Blockly.Msg.blink_tooltip = "The board LED flashes 1 or 10 times per second";
Blockly.Msg.del = "the LED in pin";
Blockly.Msg.del_tooltip = "turns on (off) the LED connected to the indicated pin";
Blockly.Msg.bargraphe = "bargraph";
Blockly.Msg.bargraphe_allume="turn on LEDs to";
Blockly.Msg.bargraphe_allume_tooltip="0 lights no LEDs \n2,5 lights up the first 2 LEDs and the 3rd half turns on \n10 turns on all LEDs";
Blockly.Msg.bargraphe_tooltip = "bargraph module composed of 10 LEDs (8 green, 1 yellow and 1 red), it is necessary to indicate the pins of the arduino on which will be connected DCKI and DI";
Blockly.Msg.rvb_init="LED RGB";
Blockly.Msg.rvb_init_tooltip="indicate the PWM pins to connect to the RGB LED";
Blockly.Msg.rvb_set="show color";
Blockly.Msg.rvb_set_tooltip="displays a color indicating a value for the three components (red, green, blue)";
Blockly.Msg.pixel1 = "RGB NeoPixel";
Blockly.Msg.pixel2 = "update pixels";
Blockly.Msg.pixel3 = "with color";
Blockly.Msg.pixel4 = "number";
Blockly.Msg.pixel5 = "set pixel brightness to";
Blockly.Msg.pixel6 = "set the pixel";
Blockly.Msg.pixel1_tooltip="neopixel RGB module indicate the pin to be connected and the number of pixels";
Blockly.Msg.pixel2_tooltip="show changes made";
Blockly.Msg.pixel5_tooltip="adjusts pixel brightness (from 0 to 255)";
Blockly.Msg.pixel3_tooltip="choose the pixel to light and its color \ nCaution the numbering starts at 0";
// output
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "put the DIGITAL pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "write a 0 or 1 logical state to a specific output";
Blockly.Msg.toggle = "toggle the state of the pin";
Blockly.Msg.toggle_tooltip = "Toggle: \n write a logical state 0 if before there was a state 1 (and vice versa) on the specified output";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "put the PWM pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "send a value between 0 and 255 on a specific output";
// input
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "DIGITAL pin state";
Blockly.Msg.in_pullup = "Pull-Up";
Blockly.Msg.in_pullup_tooltip = "returns the logical state (0 or 1) of the indicated pin \nreturns 1 (high state) by default if pull-up enabled";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "read logical state 0 or 1 of the digital pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "ANALOG pin value";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "returns a value between 0 and 1023";
// audio
Blockly.Msg.play = "play";
Blockly.Msg.play_tooltip = "play the note";
Blockly.Msg.play_helpurl = "";
Blockly.Msg.beep = "beep on the pin";
Blockly.Msg.beep_TOOLTIP = "beeps (at 440Hz for 1s) on the selected pin";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emit a sound on the pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "frequency (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "duration (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emit a sound on the selected pin, at the desired frequency and for the desired duration";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "stop the sound on the pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "stop the sound on the selected pin";
Blockly.Msg.lp2i_mp3_helpurl = "https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299";
Blockly.Msg.lp2i_mp3_Volume = "volume [0-48]";
Blockly.Msg.lp2i_mp3_autoplay = "AutoPlay";
Blockly.Msg.lp2i_mp3 = "MP3 player";
Blockly.Msg.lp2i_mp3_tooltip = "DFPlayer Mini mp3: \ninitialization of the module, volume and operating mode \nModule MP3 <-> Arduino \nRx (2) <------------- -> Tx (1) ";
Blockly.Msg.lp2i_mp3_play = "play the mp3 file";
Blockly.Msg.lp2i_mp3_play_track_tooltip = "play the specified song";
Blockly.Msg.lp2i_mp3_play_tooltip = "plays the current song";
Blockly.Msg.lp2i_mp3_pause = "pause mp3 file";
Blockly.Msg.lp2i_mp3_pause_tooltip = "stop the current song";
Blockly.Msg.lp2i_mp3_prev = "read the previous mp3 file";
Blockly.Msg.lp2i_mp3_prev_tooltip = "play the previous track";
Blockly.Msg.lp2i_mp3_vol = "set the volume to";
Blockly.Msg.lp2i_mp3_vol_tooltip = "set the volume to the specified value [0-48]";
Blockly.Msg.lp2i_mp3_next = "read the following mp3 file";
Blockly.Msg.lp2i_mp3_next_tooltip = "plays the next song";
// servomotor
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "rotate to";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "angle [0°-180°]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "possible rotation between 0 and 180 degrees";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "spin";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "Spin the servo connected to the specified pin, at the indicated speed and in the selected direction";
//engine
Blockly.Msg.mot_tooltip = "Shield motor controller L293D: \n activates both motors (M1 and M2) to advance or turn, the speed can be set between 0 and 90";
Blockly.Msg.mot_stop = "stop";
Blockly.Msg.mot_stop_tooltip = "L293D Motor Controller Shield: \nstop the two motors (M1 and M2)";
Blockly.Msg.moteur = "activate the engine";
Blockly.Msg.moteurstop = "stop the engine";
Blockly.Msg.moteur_tooltip = "starts the DC motor connected to the specified pin, at the indicated speed \nspeed = 0 -> motor stop";
Blockly.Msg.moteurdagu_tooltiprs040 = "RS 040 board: \n activates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.moteurdagu_tooltiprs040stop = "RS 040 board: \nstop one of the 2 motors";
Blockly.Msg.moteurdagu_tooltiprs027 = "RS 027 board: \n operates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = Blockly.Msg.vitesse+"[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "forward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "backward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "stop";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - Stepper Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - stepper motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "pin";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "not per turn";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "speed (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "number of steps";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "DC 1 engine";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "DC 2 engine";
Blockly.Msg.m_pap="step-by-step engine";
Blockly.Msg.m_pap_step="step";
Blockly.Msg.m_pap_step1="move forward";
Blockly.Msg.m_pap_tooltip = "Initialization of a stepping motor. \nIndicate number of steps, speed in rpm and pins to connect";
Blockly.Msg.m_pap_step_tooltip = "activates the stepping motor by the number of steps indicated, the following instruction will only be executed once the rotation of the motor is done";
// serial
Blockly.Msg.Serial_Init = "serial port on";
Blockly.Msg.Serial_Init_tooltip = "Set the communication rate in characters per second for serial communication";
Blockly.Msg.Serial_Write = "send to serial port";
Blockly.Msg.Serial_write_tooltip = "Send data to the serial port";
Blockly.Msg.Serial_read = "data read on the serial port";
Blockly.Msg.Serial_read_tooltip = "returns the first available data byte available in the serial port, or -1 if no data is available";
Blockly.Msg.Serial_available = "amount of data on the serial port";
Blockly.Msg.Serial_available_tooltip = "returns the number of bytes available in the serial port queue, or 0 if nothing is available";
Blockly.Msg.Serial_saut = "a line break";
Blockly.Msg.Serial_saut_tooltip = "returns a line break on the serial monitor";
Blockly.Msg.Serial_space = "a separator";
Blockly.Msg.Serial_space_tooltip = "return a space on the serial monitor";
Blockly.Msg.repl_read = "user entered command";
// software serial
Blockly.Msg.SSERIAL_Init = "software port on Rx";
Blockly.Msg.SSERIAL_tooltip = "Creating a new communication port using the specified pins and speed";
Blockly.Msg.SSERIAL_Read = "data read on the software port";
Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Write = "send to the software port";
Blockly.Msg.SSERIAL_Write_tooltip = "Send data to the software port";
Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Available = "amount of data on the software port";
Blockly.Msg.SSERIAL_Available_tooltip = "returns the number of available bytes in the software port queue, or 0 if nothing is available";
////////////////////////////OTTO DIY Robot/////////////////////
Blockly.Msg.OTTO9_HOME_TEXT = "home";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "Otto goes to home position straight";
Blockly.Msg.OTTO9_DIY_URL = "https://wikifactory.com/+OttoDIY/otto-diy";
Blockly.Msg.OTTO9_HUMANOID_URL = "https://wikifactory.com/+OttoDIY/humanoid";
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP='use small positive and negative values iteratively,change gradually until is completely straight (90º)';
Blockly.Msg.OTTO9_EEPROM_TEXT= 'save Trims on EEPROM';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP= 'Use only after completely straight(90º) one time, delete this BLOCK after for further programming';
Blockly.Msg.OTTO9_MOVE_TEXT = "move";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "Otto basic movements";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["↑ forward", "FORWARD"], ["↓ backward", "BACKWARD"], ["↺ turn left", "LEFT"], ["↻ turn right", "RIGHT"], ["bend to the left", "BENDLEFT"], ["bend to the right", "BENDRIGHT"], ["shake left leg", "SHAKELEFT"], ["shake right leg", "SHAKERIGHT"], ["up", "jump"]];
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "speed";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["normal", "1000"],["slow", "2000"],["very slow", "3000"] , ["fast", "750"], ["very fast", "500"], ["way to fast", "250"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "dance";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "Otto dance!";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["moonwalk ⟵", "moonwalkerLEFT"],  ["moonwalk ⟶", "moonwalkerRIGHT"],["crossing ⟵", "crusaitoLEFT"],["crossing ⟶", "crusaitoRIGHT"], ["flapping ↑", "flappingFRONT"], ["flapping ↓", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "size";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["normal", "25"], ["little", "10"], ["big", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "do";
Blockly.Msg.OTTO9_DO_TOOLTIP = "Otto complex movements";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["swing", "swing"], ["updown", "updown"], ["tiptoeSwing", "tiptoeSwing"], ["jitter", "jitter"], ["ascendingTurn", "ascendingTurn"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "gesture";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "Emotional sounds combined with movements";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["😃 happy1", "OttoSuperHappy"],["🙂 happy2", "OttoHappy"], ["🙁 sad", "OttoSad"], ["😴 sleep", "OttoSleeping"], ["😕 confused", "OttoConfused"], ["😰 fretful", "OttoFretful"], ["😍 love", "OttoLove"], ["😡 angry", "OttoAngry"], ["🤩 magic", "OttoMagic"], ["😐 wave", "OttoWave"], [" 😎 victory", "OttoVictory"], ["😞 fail", "OttoFail"], ["💩 fart", "OttoFart"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "sound";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "Emotional sounds";
Blockly.Msg.OTTO9_SOUND_CHOICE = [ ["😃 happy1", "S_superHappy"], ["🙂 happy2", "S_happy"], ["😊 happy3", "S_happy_short"], ["🙁 sad", "S_sad"], ["😕 confused", "S_confused"], ["🤗 cuddly", "S_cuddly"], ["😮 Oh", "S_OhOoh"], ["😯 OhOoh", "S_OhOoh2"], ["😲 surprise", "S_surprise"],["🤖 connect", "S_connection"], [" 🤖 disconnect", "S_disconnection"], ["👇 push", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 sleep", "S_sleeping"], ["💩 fart1", "S_fart1"], ["💩 fart2", "S_fart2"], ["💩 fart3", "S_fart3"],];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "distance [cm]";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "Ranging distance between 2cm to 400cm";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "obstacle";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["close", "10"],["very close", "3"],["far", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "noise measured";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 is quiet, 500 noise and more than 1000 is loud, also adjust the sensor trimpot sensibility";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "touch";
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "use if conditional";
Blockly.Msg.OTTO9_GETG_TEXT = "motion";
Blockly.Msg.OTTO9_GETG_CHOICE = [["aX", "gyro.getAngleX()"], ["aY", "gyro.getAngleY()"], ["aZ", "gyro.getAngleZ()"], ["gX", "gyro.getGyroX()"], ["gY", "gyro.getGyroY()"]];
Blockly.Msg.OTTO9_MOUTH_TEXT = "mouth";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "mouth emotion for the 8x8 LED matrix #0-30";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["😃 happy1", "happyOpen"],["🙂 happy2", "happyClosed"], ["😊 smile", "smile"], ["😦 sad1", "23"], ["🙁 sad2", "24"], ["😮 surprise", "smallSurprise"], ["😲 Surprise2", "bigSurprise"], ["😕 confused", "confused"],["😛 tongue", "tongueOut"],["🙃 silly", "culito"],  ["😑 serious", "lineMouth"], ["🙄 upset", "21"], ["💖 heart", "heart"], ["🦇 v1", "vamp1"], ["🦇 v2", "vamp2"], ["❌ no", "xMouth"], ["✅ OK", "okMouth"],["❓?", "27"], ["⚡ thunder", "thunder"]];
Blockly.Msg.OTTO9_EYES_TEXT = "eyes";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "eyes emotion for the 16x8 i2C LED matrix ";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃 happy1", "happy_bmp"],["🙂 happy2", "eyes_bmp"], ["😦 sad", "sad_bmp"], ["😡 angry1", "angry_bmp"], ["😡 angry2", "angry2_bmp"], ["😰 freetful", "freetful_bmp"], ["😕 confused", "confused_bmp"],["😴 sleep", "sleep_bmp"],["😍 love", "love_bmp"],  ["😑 wave", "wave_bmp"], ["🤩 magic", "magic_bmp"], ["😞 fail", "fail_bmp"], ["🤖 logo", "logo_bmp"], ["❌❌ no", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "eyes text";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " clear eyes";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "limited to CAPITALS A to Z NUMBERS 0 to 9 : ; < >  = @, max.9 characters";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "mouth text";
Blockly.Msg.OTTO9_CLEAR_TEXT = " clear mouth";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Turn off all LEDs of the mouth matrix 8x8";
Blockly.Msg.OTTO9_ARMS_TEXT = "arms";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "move the arms!";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["hands up", "HANDSUP"], ["handwave left", "HANDWAVE1"], ["handwave right", "HANDWAVE2"]];