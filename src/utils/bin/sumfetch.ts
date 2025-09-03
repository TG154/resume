import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  

 :                                               sumfetch
 :             ===+++++===-                     -----------
 :          ==++**********++=-           %       ABOUT
 :        =++***##%...-:::#**++=.        #     
 :      =++**##.=++++++****## *+=-       #       ${config.name}
 :      =++**##.=++++++****## *+=-       #       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
 :     +++**# ++++*********#####*+-      #      爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
 :     ++**% ++**************### *+-     #    # -----------
      +++*% ********************# +=.    #    #  CONTACT 
      ++*# *** ** *##* **********# =:    # .  #  <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
      ++*# *** ** *##* **********# =:    # .  #  <u><a href="mailto:${config.email_2}" target="_blank">${config.email_2}</a></u>
      ++*# *** ** *##* **********# =:    # .  #  <u><a href="mailto:${config.email_3}" target="_blank">${config.email_3}</a></u>
..    ++*%****  -   ##*   *** #**##+@..%%  ...#  <u><a href="${config.social.github}" target="_blank">GitHub</a></u>
.. @%%### ***          -*    *   ## %...%  ...#  <u><a href="${config.social.Instagram}" target="_blank">Instagram</a></u>
.  %=%###***          .     -    ###%%..%%  ..# -----------
.  %%###%**=                    **** %...%  ..# Introduction: 
: .%#### **          :+         +*** %@..%%  :# Hey, I’m Talha Gohar 👋
. %*##** **%     +=-::++*#-     +***  %.    ::# A curious O Levels student with a passion for coding,
:   *******%%%*+++==--++*****.%%+***    .:::::# game dev, and tech tinkering. I love building projects
::::    # *****+++==--++*******++***  %:::::::# with Godot, Python, and JavaScript while exploring the
-:-:::  ******+ ++==--++***  **++***  %:::::::# power of Linux and Windows. Always learning, always
------. ** **** +++===++***  *++***# :%--:::::* experimenting — trying to push my skills further every day. 
=------  ** %%+ ++++==*****  %%#***  -%-------+
+------- *** %%+++++==******%%#***  --#-------+
+-------  *## %%%%*+++****%%%#**** ---#-------+
+-------   ##* %%%%%%*#%%%%#*****  -----------=
+--:    **%%%#*# %%%%%%%##*****%%%*+      -----
   ######***%%%%## *********%%%%****++==-:    =
   


`;
  } else {
    return `
 :                                               sumfetch
 :             ===+++++===-                     -----------
 :          ==++**********++=-           %       ABOUT
 :        =++***##%...-:::#**++=.        #     
 :      =++**##.=++++++****## *+=-       #       ${config.name}
 :      =++**##.=++++++****## *+=-       #       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
 :     +++**# ++++*********#####*+-      #      爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
 :     ++**% ++**************### *+-     #    # -----------
      +++*% ********************# +=.    #    #  CONTACT 
      ++*# *** ** *##* **********# =:    # .  #  <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
      ++*# *** ** *##* **********# =:    # .  #  <u><a href="mailto:${config.email_2}" target="_blank">${config.email_2}</a></u>
      ++*# *** ** *##* **********# =:    # .  #  <u><a href="mailto:${config.email_3}" target="_blank">${config.email_3}</a></u>
..    ++*%****  -   ##*   *** #**##+@..%%  ...#  <u><a href="${config.social.github}" target="_blank">GitHub</a></u>
.. @%%### ***          -*    *   ## %...%  ...#  <u><a href="${config.social.Instagram}" target="_blank">Instagram</a></u>
.  %=%###***          .     -    ###%%..%%  ..# -----------
.  %%###%**=                    **** %...%  ..# Introduction: 
: .%#### **          :+         +*** %@..%%  :# Hey, I’m Talha Gohar 👋
. %*##** **%     +=-::++*#-     +***  %.    ::# A curious O Levels student with a passion for coding,
:   *******%%%*+++==--++*****.%%+***    .:::::# game dev, and tech tinkering. I love building projects
::::    # *****+++==--++*******++***  %:::::::# with Godot, Python, and JavaScript while exploring the
-:-:::  ******+ ++==--++***  **++***  %:::::::# power of Linux and Windows. Always learning, always
------. ** **** +++===++***  *++***# :%--:::::* experimenting — trying to push my skills further every day. 
=------  ** %%+ ++++==*****  %%#***  -%-------+
+------- *** %%+++++==******%%#***  --#-------+
+-------  *## %%%%*+++****%%%#**** ---#-------+
+-------   ##* %%%%%%*#%%%%#*****  -----------=
+--:    **%%%#*# %%%%%%%##*****%%%*+      -----
   ######***%%%%## *********%%%%****++==-:    =
>>>>>>> 0448ef0 (Updated config and sumfetch (emails, social links, etc.)and theme)
`;
  }
};

export default sumfetch;
