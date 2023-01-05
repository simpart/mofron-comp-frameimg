/**
 * @file mofron-comp-frameimg/index.js
 * @brief frame image component for mofron
 * @license MIT
 */
const Frame  = require('mofron-comp-frame');
const Image  = require('mofron-comp-image');
const HrzPos = require('mofron-effect-hrzpos');
const VrtPos = require('mofron-effect-vrtpos');
const Link   = require('mofron-event-link');
const comutl = mofron.util.common;

module.exports = class extends Frame {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @short 
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("FrameImg");
	    this.shortForm("src");
            
	    /* init config */
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.image().size('100%','100%');
	    this.image().effect([new HrzPos(), new VrtPos()]);

	    this.child(this.image());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    imageSize (prm) {
        try {
            this.image().size(prm,prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    image (prm) {
        try {
            return this.innerComp('image', prm, Image);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    src (prm) {
        try {
            return this.image().src(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    href (prm, tab) {
        try {
	    if (undefined === prm) {
                return this.event({ modname:'Link' }).url();
	    }
            this.event(new Link(prm,tab));
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
