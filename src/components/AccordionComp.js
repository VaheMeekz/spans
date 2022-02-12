import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import user from "../images/user.svg"
import { Button } from '@mui/material';
import calendar from "../images/calendar.svg"
import report from "../images/report.svg"
import history from "../images/history.svg"
import logout from "../images/logout.svg"

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='flex'><img src={user} />Статистика</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button>
          Футбол
          </Button>
          <Button>
          Баскетбол
          </Button>
          <Button>
          Волейбол
          </Button>
        </AccordionDetails>
      </Accordion>

     <div className='userData'>
          <Button>
            <img src={calendar} />
          Ближайшие игры
          </Button>
          <Button>
          <img src={report} />
          Игровые отчёты
          </Button>
          <Button>
          <img src={history} />
          История заказов
          </Button>
     </div>

     <div className='logOut'>
     <Button>
            <img src={logout} />
            Выйти
          </Button>
     </div>
    </div>
  );
}