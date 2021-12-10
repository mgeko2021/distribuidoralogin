import React, {useRef, useEffect, useCallback} from 'react';
import {ReactComponent as FlechaIzquierda} from './img/iconmonstr-angel-left-thin.svg';
import {ReactComponent as FlechaDerecha} from './img/iconmonstr-angel-right-thin.svg';
import styled from 'styled-components';

const Slideshow = ({
		children,
		controles = false,
		velocidad= null,
	}) => {
	const slideshow = useRef(null);
	// const intervaloSlideshow = useRef(null);
	

	const siguiente = useCallback(() => {
		// Comprobamos que el slideshow tenga elementos
		if(slideshow.current.children.length > 0){

			// Obtenemos el primer elemento del slideshow.
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion para el slideshow.
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del Slideshow.
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final.
				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener('transitionend', transicion);
			}

			// Eventlistener para cuando termina la animacion.
			slideshow.current.addEventListener('transitionend', transicion);

		}
	}, [velocidad]);
	
	const anterior = () => {
		if(slideshow.current.children.length > 0){
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

	return (
		<ContenedorPrincipal>
			<ContenedorSlideshow ref={slideshow}>
				{children}
			</ContenedorSlideshow>
			{controles && <Controles>
				<Boton onClick={anterior}>
					<FlechaIzquierda />
				</Boton>
				<Boton derecho onClick={siguiente}>
					<FlechaDerecha />
				</Boton>
			</Controles>}
		</ContenedorPrincipal>
	);
}

const ContenedorPrincipal = styled.div`
	position: relative;
	width:100%;
`;

const ContenedorSlideshow = styled.div`
	width:200%;
	display: flex;
	@media (max-width: 992px) {
    width:400%;
  	}
	@media (max-width: 576px) {
    width:600%;
  	}
	@media (max-width: 320px) {
    width:1200%;
  	}
	// flex-wrap: nowrap;
`;

const Slide = styled.div`
	display:flex;
	width:100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
	/* max-height: 500px; */
	position: relative;
	

	img {
		width: 70%;
		vertical-align: top;
	}
	/* @media (max-width: 960px) {
		img {
		width: 90%;
		vertical-align: top;
	} */
  /* } */
`;

const TextoSlide = styled.div`
	background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
	color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
	width: 100%;
	padding: 10px 60px;
	text-align: center;
	position: absolute;
	bottom: 0;

	@media screen and (max-width: 700px) {
		position: relative;
		background: #000;
	}
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: .3s ease all;
	/* &:hover {
		background: rgba(0,0,0,.2);
		path {
			fill: #fff;
		}
	} */

	path {
		filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
	}

	${props => props.derecho ? 'right: 0' : 'left: 0'}
`;
 
export {Slideshow, Slide, TextoSlide};