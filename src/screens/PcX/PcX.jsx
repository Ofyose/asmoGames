import React from "react";
import { BoutonActualitS } from "../../components/BoutonActualitS";
import { BoutonAllerDroite } from "../../components/BoutonAllerDroite";
import { BoutonAllerGauche } from "../../components/BoutonAllerGauche";
import { BoutonCEstParti } from "../../components/BoutonCEstParti";
import { BoutonCatalogue } from "../../components/BoutonCatalogue";
import { BoutonPages } from "../../components/BoutonPages";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "./style.css";

export const PcX = () => {
  return (
    <div className="PC-x">
      <div className="div-2">
        <Footer
          className="footer-instance"
          iconFacebook="/img/icon-facebook.png"
          iconInstagram="/img/icon-instagram.png"
          iconTwitter="/img/icon-twitter.png"
          img="/img/line-4.svg"
          line="/img/line-3.svg"
          logo="/img/logo-1.png"
        />
        <Header
          className="header-instance"
          property1="default"
          sourianteConfiante="/img/souriante-confiante-elegante-jeune-femme-debout-fond-blanc-94160.png"
        />
        <div className="overlap-2">
          <div className="background-2" />
          <div className="bloc-catalogue">
            <div className="overlap-3">
              <div className="overlap-group-wrapper">
                <div className="dgrad-blanc-wrapper">
                  <div className="dgrad-blanc" />
                </div>
              </div>
              <div className="flexcontainer">
                <p className="text">
                  <span className="span">
                    AMALFI : notre nouveau
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="span">jeu de plateau</span>
                </p>
              </div>
              <BoutonPages
                className="bouton-pages-instance"
                droite="/img/droite-3.svg"
                gauche="/img/gauche-2.svg"
                milieu="/img/milieu-2.svg"
                property1="gauche-bleu"
              />
              <BoutonCatalogue className="bouton-catalogue-instance" property1="default" />
            </div>
          </div>
          <div className="bloc-actualits">
            <div className="overlap-3">
              <div className="div-wrapper">
                <div className="overlap-group-3">
                  <div className="dgrad-blanc-2" />
                </div>
              </div>
              <div className="flexcontainer-2">
                <p className="span-wrapper">
                  <span className="text-wrapper-5">
                    découvrez notre top <br />
                  </span>
                </p>
                <p className="span-wrapper">
                  <span className="text-wrapper-5">des jeux en famille pour 2023</span>
                </p>
              </div>
              <BoutonPages
                className="design-component-instance-node"
                droite="/img/droite-2.svg"
                gauche="/img/gauche-1.svg"
                milieu="/img/milieu-1.svg"
                property1="gauche-bleu"
              />
              <BoutonActualitS className="bouton-actualits" />
            </div>
          </div>
        </div>
        <div className="bloc-crations">
          <div className="overlap-4">
            <div className="images-2">
              <div className="overlap-group-4">
                <div className="dgrad-blanc-3" />
              </div>
            </div>
            <div className="texte">
              <p className="nom-du-jeu-SUPER">
                NOM DU JEU : SUPER PUMPKIN
                <br />
                CRÉATEUR : DASSI
              </p>
              <p className="QUELQUES-CR-ations">QUELQUES CRÉATIONS, POUR VOUS DONNER DES IDÉES !</p>
            </div>
            <div className="boutons">
              <BoutonCEstParti
                cEstPartiClassName="bouton-c-est-parti-3"
                className="bouton-c-est-parti-instance"
                overlapGroupClassName="bouton-c-est-parti-2"
              />
              <BoutonAllerGauche
                className="bouton-aller-gauche-instance"
                polygon="/img/polygon-1.svg"
                property1="default"
              />
              <BoutonAllerDroite
                className="bouton-aller-droite-instance"
                polygon="/img/polygon-2.svg"
                property1="default"
              />
              <BoutonPages
                className="bouton-pages-2"
                droite="/img/milieu.png"
                gauche="/img/gauche.png"
                milieu="/img/milieu.png"
                property1="gauche-bleu"
              />
            </div>
          </div>
        </div>
        <div className="bloc-IA">
          <div className="overlap-5">
            <div className="images-3">
              <div className="overlap-group-5">
                <div className="background-3" />
                <div className="fond-jaune" />
                <img className="image" alt="Image" src="/img/image.png" />
              </div>
            </div>
            <div className="bouton-lire-l">
              <div className="LIRE-l-article-wrapper">
                <div className="LIRE-l-article">LIRE L’ARTICLE</div>
              </div>
            </div>
            <div className="texte-2">
              <p className="article">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET
                DOLORE MAGNA ALIQUA. UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP
                EX EA COMMODO CONSEQUAT. DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU
                FUGIAT NULLA PARIATUR. EXCEPTEUR SINT OCCAECAT CUPIDATAT NON PROIDENT, SUNT IN CULPA QUI OFFICIA
                DESERUNT MOLLIT ANIM ID EST LABORUM.
              </p>
              <div className="titre">DÉCOUVREZ NOTRE IA</div>
            </div>
          </div>
        </div>
        <div className="comment-a-marche">
          <div className="IMAGINEZ">
            <div className="icon-cloud-wrapper">
              <img className="icon-cloud" alt="Icon cloud" src="/img/icon-cloud.png" />
            </div>
            <div className="text-wrapper-6">IMAGINEZ</div>
          </div>
          <div className="CREEZ">
            <div className="group-wrapper">
              <img className="group" alt="Group" src="/img/group-4.png" />
            </div>
            <div className="text-wrapper-6">CREEZ</div>
          </div>
          <div className="RECEVEZ">
            <div className="icon-truck-fast-wrapper">
              <img className="icon-truck-fast" alt="Icon truck fast" src="/img/icon-truck-fast.png" />
            </div>
            <div className="text-wrapper-6">RECEVEZ</div>
          </div>
          <div className="PROFITEZ">
            <div className="icon-emoji-happy-wrapper">
              <img className="icon-emoji-happy" alt="Icon emoji happy" src="/img/icon-emoji-happy.png" />
            </div>
            <div className="text-wrapper-6">PROFITEZ</div>
          </div>
          <div className="text-wrapper-7">COMMENT CA MARCHE ?</div>
        </div>
        <div className="bannire-CTA">
          <p className="CR-ez-VOTRE-PROPRE">CRÉEZ VOTRE PROPRE JEU AVEC ASMOGAMES !</p>
          <div className="bouton-c-est-parti-4">
            <div className="overlap-group-6">
              <div className="fond" />
              <div className="c-EST-PARTI-2">C’EST PARTI&nbsp;&nbsp;!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
