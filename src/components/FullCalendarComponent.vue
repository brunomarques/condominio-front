<script>
import { defineComponent } from 'vue'

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import multiMonthPlugin from '@fullcalendar/multimonth'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

import { INITIAL_EVENTS, createEventId } from '@/eventsTest/events'
import { locales } from '@/eventsTest/locales'

export default defineComponent({
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, timeGridPlugin, listPlugin, multiMonthPlugin, interactionPlugin ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridDay,listWeek,timeGridWeek,dayGridMonth,multiMonthYear'
        },
        initialView: 'dayGridMonth',
        footerToolbar: {
            center: 'multiMonthFourMonth'
        },
        views: {
            multiMonthFourMonth: {
                type: 'multiMonth',
                duration: { months: 4 }
            }
        },
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        locale: this.initialLocaleCode,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        navLinks: true,
        weekends: true,
        displayEventTime: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
        /*eventMouseEnter: function(info) {
            console.log(info, info.event.id);
            
        },
        eventMouseLeave: function(info) {
            console.log(info, info.event.id);
        }*/
        eventDidMount: (info) => {
            const event = info.event;
            const element = info.el;

            element.setAttribute("data-popover-target", "popover-hover-"+event.id);
            element.setAttribute("data-popover-trigger", "hover");

            const htmlContent = `<div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg text-center dark:border-gray-600 dark:bg-gray-700">
                                     <h3 class="font-semibold text-gray-900 dark:text-white">${event.title}</h3>
                                 </div>
                                 <div class="px-3 py-2 max-h-32 overflow-auto md:text-sm">
                                     <p>É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.</p>
                                     <p>A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma aparência similar a de um texto legível.</p>
                                     <p>Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção.</p>
                                     <p>Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero).</p>
                                 </div>
                                 <div data-popper-arrow></div>`;

            let popoverElement = document.createElement('div');
                popoverElement.setAttribute('data-popover', '');
                popoverElement.setAttribute('id', 'popover-hover-'+event.id);
                popoverElement.setAttribute('role', 'tooltip');
                popoverElement.setAttribute('class', "absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800")
                popoverElement.innerHTML = htmlContent;

                document.getElementById('put-popover').appendChild(popoverElement);

            //console.log(event, element, event.id);
        },

        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: [],
      locales: locales,
      initialLocaleCode: '',
    }
  },
  methods: {
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },

    handleDateSelect(selectInfo) {
      let title = prompt('Please enter a new title for your event')
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },

    handleEventClick(clickInfo) {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },

    handleEvents(events) {
      this.currentEvents = events
    },
    
    handleLocaleChange() {
        this.calendarOptions.locale = this.initialLocaleCode;
    }
  }
})
</script>

<template>
    <div class='grid grid-cols-12 gap-2 flex-row text-sm dark:bg-gray-800 dark:text-gray-200 text-justify'>
        <div class='col-start-1 col-span-2 bg-blue-100 dark:bg-gray-500 dark:text-gray-200 prose'>
            <div class='px-6'>
                <h4>Instructions</h4>

                <ul class="text-sm">
                    <li>Select dates and you will be prompted to create a new event</li>
                    <li>Drag, drop, and resize events</li>
                    <li>Click an event to delete it</li>
                </ul>
            </div>

            <div class='px-6'>
                <label>
                    <input
                        type='checkbox'
                        :checked='calendarOptions.weekends'
                        @change='handleWeekendsToggle'
                    />
                    toggle weekends
                </label>
            </div>

            <div class='px-6'>
                <h4>All Events ({{ currentEvents.length }})</h4>

                <ul class="text-sm">
                    <li v-for='event in currentEvents' :key='event.id'>
                        <b>{{ event.startStr }}</b> - 
                        <i>{{ event.title }}</i>
                    </li>
                </ul>
            </div>

            <div class="px-6">
                <h4>Loales</h4>
                <label for="locales">Select one locale</label>
                <select
                    id="locales"
                    v-model='initialLocaleCode'
                    @change='handleLocaleChange'
                    class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="">--Select one--</option>
                    <option v-for="(locale) in locales" :key="locale" :value="locale">{{ locale }}</option>
                </select>
            </div>
        </div>

        <div class='col-start-3 col-span-10 p-6'>
            <FullCalendar class='rounded-md dark:bg-gray-700' :options='calendarOptions' />
            <div id="put-popover"></div>
        </div>
    </div>
</template>

<style lang='css'>

</style>