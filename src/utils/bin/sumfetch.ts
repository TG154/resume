import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
_______________________ .________   _____    sumfetch: summary display
\__    ___/  _____/_   ||   ____/  /  |  |  -----------
  |    | /   \  ___|   ||____  \  /   |  |_  ABOUT
 |    | \    \_\  \   |/       \/    ^   /   ${config.name}
  |____|  \______  /___/______  /\____   |  ﰩ ${config.ps1_hostname}
                 \/           \/      |__|   <u><a href="${config.resume_url}" target="_blank">resume</a></u>
                                            爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
                                            -----------
                                             CONTACT 
                                             <u><a href="mailto:${config.email_no_1}" target="_blank">${config.email_no_1}</a></u>
                                             <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                                             <u><a href="https://instagram.com/${config.social.instagram}" target="_blank">instagram.com/${config.social.instagram}</a></u>
`;
  } else {
    return `
___________      .__  .__                    sumfetch
\__    ___/____  |  | |  |__ _____          -----------
  |    |  \__  \ |  | |  |  \\__  \          ABOUT
  |    |   / __ \|  |_|   Y  \/ __ \_        ${config.name}
  |____|  (____  /____/___|  (____  /        <u><a href="${config.resume_url}" target="_blank">resume</a></u>
              \/          \/     \/         爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
                                            -----------
  ________ ________  .__                     CONTACT 
 /  _____/ \_____  \ |  |__ _____ _______    <u><a href="mailto:${config.email_no_1}" target="_blank">${config.email_no_1}</a></u>
/   \  ___  /   |   \|  |  \\__  \\_  __ \   <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
\    \_\  \/    |    \   Y  \/ __ \|  | \/  
 \______  /\_______  /___|  (____  /__|     -----------
        \/         \/     \/     \/                      

`;
  }
};

export default sumfetch;
