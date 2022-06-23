import {Inject, Injectable} from '@angular/core';

import { MerkleTree } from 'merkletreejs';
import { sha256 } from 'js-sha256';
import  keccak256  from 'keccak256';

import { WHITELIST } from '../contracts/addresses_v2';




@Injectable({
    providedIn: 'root'
})

export class CaculateService  {
    public levelObj;
    constructor() {
      
    }





    
    getLevel(account: string) {
        let level = Object.keys(WHITELIST).find(key => {
            let isInclude = WHITELIST[key].some(item => item === account);
            if (isInclude) return key;
        })
        console.log('level is: ' + level);
        return level === undefined ? 0 : +level;
    }

    getLeaves(level: number) {
        if (WHITELIST[level] === undefined) {
            return [];
        } else {
            return WHITELIST[level.toString()]
        }
    }

    getMerkleProof(level: number, account: string) {
        if (WHITELIST[level] === undefined) {
            return [];
        }
        let leaves = this.getLeaves(level);
        let options = { hashLeaves: true, sortPairs: true, sortLeaves: true }
        
        const tree = new MerkleTree(leaves, keccak256, options);
        const outputRoot = tree.getHexRoot();
        const outputLeave = tree.getHexLeaves();

        const hexAccount = '0x' + keccak256(account).toString('hex');
        const proof = tree.getHexProof(hexAccount);
        console.log('hexAccount', hexAccount);
        console.log('proof', proof);

        let verify = MerkleTree.verify(proof, hexAccount, outputRoot, keccak256, options);
        console.log('verify: ' + verify)

        return proof

    }


    verifyProof(proof, leaf, root) {
        let result = MerkleTree.verify(proof, leaf, root, keccak256, { hashLeaves: true, sortPairs: true, sortLeaves: true })
        console.log(result)
    }

    verifyLenth(name: string) {
        const withoutSpaceName = name.replace(/\s+/g,"");
        const dPattern = /^[a-zA-Z0-9\s]{6,50}$/;
        return dPattern.test(withoutSpaceName);
    }

    verifyLevelPermission(name) {
        const withoutSpaceName = name.replace(/\s+/g,"");
        const length = withoutSpaceName.length;
        return {
            failKey: null,
            verify: true
        };
    }
}