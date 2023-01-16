import { BlogSvg, BonusUISvg, ButtonsSvg, CalanderSvg, ChartsSvg, ChatSvg, ContactSvg, EcommerceSvg, EditorsSvg, EmailSvg, FAQSvg, FilemanagerSvg, FormsSvg, GallarySvg, HeaderBookmarkSvg, HomeSvg, IconsSvg, JobsearchSvg, KanbanSvg, KnowledgebaseSvg, LearningSvg, MapsSvg, OthersSvg, ProjectSvg, SamplePageSvg, SearchResultSvg, SocialappSvg, SupportTicketSvg, TablesSvg, TaskSvg, TodoSvg, UiKitsSvg, UsersComponentSvg, WidgetsSvg } from '../../Data/svgIcons';
import KapivaNavLink from './kapiva_link';
export const MENUITEMS = [
    {
        menutitle: 'Admin',
        Items: [
            {
                title: 'Admin', icon: FormsSvg, type: 'sub', active: false, children: [
                    {
                        title: 'Users ', type: 'sub', children: [
                            { title: 'Stats', type: 'link', path: `${process.env.PUBLIC_URL}${KapivaNavLink.user.userDashboard}` },
                            { title: 'Add User', type: 'link', path: `${process.env.PUBLIC_URL}${KapivaNavLink.user.addUser}` },
                            { title: 'Manage Users', type: 'link', path: `${process.env.PUBLIC_URL}${KapivaNavLink.user.manage}` },
                        ]
                    },
                    {
                        title: 'Roles', type: 'sub', children: [
                            { title: 'stats', type: 'link', path: `${process.env.PUBLIC_URL}${KapivaNavLink.role.roleDashboard}` },
                            // { title: 'Time picker', type: 'link', path: `${process.env.PUBLIC_URL}/form-widget/timepicker` },
                            { title: 'add role', type: 'link', path: `${process.env.PUBLIC_URL}${KapivaNavLink.role.addRole}` },
                            { title: 'manage role', type: 'link', path: `${process.env.PUBLIC_URL}${KapivaNavLink.role.manage}` },
                        ]
                    },
                ]
            },
        ]
    },
   
    {
        menutitle: 'Visitors',
        Items: [
            {
                title: 'Visitors', icon: HomeSvg, type: 'sub', badge: true, active: false, children: [
                    { path: `${process.env.PUBLIC_URL}${KapivaNavLink.addvisitor}`, title: 'Add Visitor', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}${KapivaNavLink.listvisitors}`, title: 'List Visitors', type: 'link' },
                ]
            },
        ]
    },
    // {
    //     menutitle: 'Web widgets',
    //     Items: [
    //         {
    //             title: 'Web widgets', icon: HomeSvg, type: 'sub', badge: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.webWidgetAdd}`, title: 'add', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.webWidgetList}`, title: 'List', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Time widget',
    //     Items: [
    //         {
    //             title: 'Time widget', icon: HomeSvg, type: 'sub', badge: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.timeradd}`, title: 'add', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.timerList}`, title: 'List', type: 'link' },
    //             ]
    //         },
    //     ]
    // },


    // {
    //     menutitle: 'Dashboard',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}${KapivaNavLink.dashboard}`, bookmark: true, icon: FilemanagerSvg, title: 'Dashboard', type: 'link' }
    //     ]
    // },
    // {
    //     menutitle: 'Hero banner',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}${KapivaNavLink.heroBanner}`, bookmark: true, icon: FilemanagerSvg, title: 'Hero Banner', type: 'link' }
    //     ]
    // },
    // {
    //     menutitle: 'Abandoned Cart',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}${KapivaNavLink.AbandonedCart}`, bookmark: true, icon: FilemanagerSvg, title: 'Abandoned cart', type: 'link' }
    //     ]
    // },    
    // {
    //     menutitle: 'Bulk Download',
    //     Items: [
    //         { path: `${process.env.PUBLIC_URL}${KapivaNavLink.bulkDownload}`, bookmark: true, icon: FilemanagerSvg, title: 'Bulk Download', type: 'link' }
    //     ]
    // },
    // {
    //     menutitle: 'Doctor WorkBench',
    //     Items: [
    //         {
    //             title: 'Doctor WorkBench', icon: HomeSvg, type: 'sub', badge: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.doctorConsultation}`, title: 'Consultation', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.doctorListProduct}`, title: 'List Product', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.doctorListDoctor}`, title: 'List Doctors', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Web widgets',
    //     Items: [
    //         {
    //             title: 'Web widgets', icon: HomeSvg, type: 'sub', badge: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.webWidgetAdd}`, title: 'add', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.webWidgetList}`, title: 'List', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'Time widget',
    //     Items: [
    //         {
    //             title: 'Time widget', icon: HomeSvg, type: 'sub', badge: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.timeradd}`, title: 'add', type: 'link' },
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.timerList}`, title: 'List', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
    // {
    //     menutitle: 'RECOMMEDED FIT WIDGET',
    //     Items: [
    //         {
    //             title: 'RECOMMEDED FIT WIDGET', icon: HomeSvg, type: 'sub', badge: true, active: false, children: [
    //                 { path: `${process.env.PUBLIC_URL}${KapivaNavLink.recommendedFitWidget_add}`, title: 'add', type: 'link' },
    //             ]
    //         },
    //     ]
    // },
];