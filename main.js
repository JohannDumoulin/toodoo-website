import './style.scss'
import Glide from '@glidejs/glide'

import logoUrl from './assets/img/logo.png'
document.getElementById('logo-img').src = logoUrl

import introUrl from './assets/img/intro.png'
document.getElementById('intro-img').src = introUrl

import scrollDownUrl from './assets/img/scroll-down.png'
document.getElementById('scroll-down-img').src = scrollDownUrl

import enchantedForestUrl from './assets/img/enchanted-forest.png'
document.getElementById('enchanted-forest-img').src = enchantedForestUrl

import submarineWorldUrl from './assets/img/submarine-world.png'
document.getElementById('submarine-world-img').src = submarineWorldUrl

import bigIcebergUrl from './assets/img/big-iceberg.png'
document.getElementById('big-iceberg-img').src = bigIcebergUrl

import sandDunesUrl from './assets/img/sand-dunes.png'
document.getElementById('sand-dunes-img').src = sandDunesUrl

import toodoosUrl from './assets/img/toodoos.png'
document.getElementById('toodoos-img').src = toodoosUrl

import electrosUrl from './assets/img/electros.png'
document.getElementById('electros-img').src = electrosUrl

import leoUrl from './assets/img/leo.png'
document.getElementById('leo-img').src = leoUrl

import maelysUrl from './assets/img/maelys.png'
document.getElementById('maelys-img').src = maelysUrl

import vincentUrl from './assets/img/vincent.png'
document.getElementById('vincent-img').src = vincentUrl

import clothildeUrl from './assets/img/clothilde.png'
document.getElementById('clothilde-img').src = clothildeUrl

import johannUrl from './assets/img/johann.png'
document.getElementById('johann-img').src = johannUrl

import romainUrl from './assets/img/romain.png'
document.getElementById('romain-img').src = romainUrl

import gobelinsUrl from './assets/img/gobelins.png'
document.getElementById('gobelins-img').src = gobelinsUrl

import logoInternetUrl from './assets/img/logo-internet.svg'
document.getElementById('logo-internet-img').src = logoInternetUrl

import logoInstagramUrl from './assets/img/logo-instagram.svg'
document.getElementById('logo-instagram-img').src = logoInstagramUrl

new Glide('.glide', {
    type: 'carousel',
    perView: 4,
    perTouch: 1,
    gap: 0,
}).mount()
