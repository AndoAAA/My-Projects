import { ROUTES } from "../../utils/constant";

export const headerMenu = (t) =>[
    {
        path: ROUTES.home,
        title: t('menu.home')
    },
    {
        path: ROUTES.shop,
        title: t('menu.shop')
    },
    {
        path: ROUTES.aboutUs,
        title: t('menu.aboutUs')
    },
    {
        path: ROUTES.contactUs,
        title: t('menu.contactUs')
    },

];
