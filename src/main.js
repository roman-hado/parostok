import './css/main.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

import { header } from '@/alpine/store/header';
import { instaSection } from "@/alpine/sections/instaSection";

Alpine.data('instaSection', instaSection)

Alpine.store('header', header)

Alpine.start()