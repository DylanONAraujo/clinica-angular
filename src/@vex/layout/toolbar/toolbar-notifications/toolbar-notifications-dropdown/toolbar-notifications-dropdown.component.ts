import { Component, OnInit } from '@angular/core';
import { Notification } from '../interfaces/notification.interface';
import { DateTime } from 'luxon';
import { trackById } from '../../../../utils/track-by';
import icSettings from '@iconify/icons-ic/twotone-settings';
import icChevronRight from '@iconify/icons-ic/twotone-chevron-right';
import icNotificationsOff from '@iconify/icons-ic/twotone-notifications-off';
import icClearAll from '@iconify/icons-ic/twotone-clear-all';
import icShoppingBasket from '@iconify/icons-ic/twotone-shopping-basket';
import icAccountCircle from '@iconify/icons-ic/twotone-account-circle';
import icInsertChart from '@iconify/icons-ic/twotone-insert-chart';
import icCheckCircle from '@iconify/icons-ic/twotone-check-circle';
import icDescription from '@iconify/icons-ic/twotone-description';
import icFeedback from '@iconify/icons-ic/twotone-feedback';
import icVerifiedUser from '@iconify/icons-ic/twotone-verified-user';
import icFileCopy from '@iconify/icons-ic/twotone-file-copy';

@Component({
  selector: 'vex-toolbar-notifications-dropdown',
  templateUrl: './toolbar-notifications-dropdown.component.html',
  styleUrls: ['./toolbar-notifications-dropdown.component.scss']
})
export class ToolbarNotificationsDropdownComponent implements OnInit {

  notifications: Notification[] = [
    {
      id: '1',
      label: 'Novo pedido recebido',
      icon: icShoppingBasket,
      colorClass: 'text-primary',
      datetime: DateTime.local().minus({ hour: 1 })
    },
    {
      id: '2',
      label: 'Novo cliente foi registrado',
      icon: icAccountCircle,
      colorClass: 'text-orange',
      datetime: DateTime.local().minus({ hour: 2 })
    },
    {
      id: '3',
      label: 'Estatísticas da campanha disponíveis',
      icon: icInsertChart,
      colorClass: 'text-purple',
      datetime: DateTime.local().minus({ hour: 5 })
    },
    {
      id: '4',
      label: 'Consultas Aprovadas',
      icon: icCheckCircle,
      colorClass: 'text-green',
      datetime: DateTime.local().minus({ hour: 9 })
    },
    {
      id: '5',
      label: 'Relatórios de clientes disponíveis',
      icon: icDescription,
      colorClass: 'text-primary',
      datetime: DateTime.local().minus({ hour: 30 })
    },
    {
      id: '6',
      label: 'Nova avaliação recebida',
      icon: icFeedback,
      colorClass: 'text-orange',
      datetime: DateTime.local().minus({ hour: 40 }),
      read: true
    },
    {
      id: '7',
      label: '22 registros verificados',
      icon: icVerifiedUser,
      colorClass: 'text-green',
      datetime: DateTime.local().minus({ hour: 60 })
    },
    {
      id: '8',
      label: 'Novos arquivos disponíveis',
      icon: icFileCopy,
      colorClass: 'text-amber',
      datetime: DateTime.local().minus({ hour: 90 })
    }
  ];

  icSettings = icSettings;
  icChevronRight = icChevronRight;
  icClearAll = icClearAll;
  icNotificationsOff = icNotificationsOff;
  trackById = trackById;

  constructor() { }

  ngOnInit() {
  }

}
