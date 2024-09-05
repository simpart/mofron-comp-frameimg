/**
 * @file mofron-comp-frameimg/index.js
 * @brief frame image component for mofron
 * @license MIT
 */
const Text   = require('mofron-comp-text');
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
            
            /* frame config */
            this.height("1.2rem");
            this.child([this.image(), this.text()]);
            
            /* image config */
            this.image().effect(new HrzPos());
            
            /* text config */
            this.text().style({
                'justify-content': 'center',
                'display':         'flex'
            });
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

    text (prm,cnf) {
        try {
	    if ('string' === typeof prm) {
	        this.text().text(prm);
		this.text().config(cnf);
                return;
	    }
            return this.innerComp('text', prm, Text);
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
    
    height (prm) {
        try {
            let ret     = super.height(prm);
            if (undefined === prm) {
                return ret;
	    }
            /* setter */
            let size    = comutl.getsize(prm);
	    let img_siz = (size.value() * 0.7) + size.type();
            this.image().size(img_siz, img_siz);
	    this.text().size(size.value() * 0.3 + size.type());
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    mainColor (prm, cnf) {
        try {
            return this.text().mainColor(prm,cnf);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    baseColor (prm) {
        try {
            this.accentColor(prm);
            return super.baseColor(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
