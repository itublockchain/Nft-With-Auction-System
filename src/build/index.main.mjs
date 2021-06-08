// Automatically generated with Reach 0.1.2
/* eslint-disable */
export const _version = '0.1.2';


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  return {
    infos: {
      "NFT": {
        owner: {
          decode: (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v33] = svs;
              return (((() => {
                
                
                return v33;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v33] = svs;
              return (((() => {
                
                
                return v33;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v33] = svs;
              return (((() => {
                
                
                return v33;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v33] = svs;
              return (((() => {
                
                
                return v33;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v33] = svs;
              return (((() => {
                
                
                return v33;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          }
        }
      },
    views: {
      1: [ctc0],
      2: [ctc0],
      3: [ctc0],
      4: [ctc0],
      5: [ctc0]
      }
    };
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Bidder(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 150));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc1, ctc2, ctc5, ctc2, ctc2, ctc1, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc1, ctc2, ctc5, ctc2, ctc2, ctc1]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1, ctc2, ctc2, ctc1, ctc2, ctc1]);
  const ctc10 = stdlib.T_Tuple([ctc1, ctc2, ctc2, ctc1, ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc1, ctc2, ctc2, ctc2, ctc1, ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc1, ctc2, ctc2, ctc2, ctc1]);
  
  
  const v21 = await ctc.creationTime();
  const txn1 = await (ctc.recv(1, 3, [ctc0, ctc1, ctc0], false, false));
  const [v26, v27, v28] = txn1.data;
  const v30 = txn1.time;
  const v25 = txn1.from;
  ;
  let v31 = false;
  let v32 = v25;
  let v33 = v25;
  let v34 = stdlib.checkedBigNumberify('./index.rsh:34:70:decimal', stdlib.UInt_max, 0);
  let v35 = true;
  let v157 = v30;
  
  while ((() => {
    
    return v35;})()) {
    if (v31) {
      const v71 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:55:20:application', stdlib.UInt_max, 70));
      const v74 = stdlib.addressEq(v71, v32);
      const v76 = v74 ? false : true;
      const v80 = stdlib.addressEq(v71, v33);
      const v82 = v80 ? false : true;
      const v85 = v74 ? false : v82;
      let v87;
      if (v85) {
        const v86 = stdlib.protect(ctc1, await interact.getBid(v26, v28), {
          at: './index.rsh:56:93:application',
          fs: ['at ./index.rsh:55:20:application call to [unknown function] (defined at: ./index.rsh:55:24:function exp)'],
          msg: 'getBid',
          who: 'Bidder'
          });
        v87 = v86;
        }
      else {
        v87 = v34;
        }
      const v101 = v85 ? v71 : v32;
      
      const v102 = stdlib.gt(v87, v34);
      const v104 = stdlib.addressEq(v33, v71);
      const v106 = v104 ? false : true;
      const v109 = v102 ? v106 : false;
      const v116 = v109 ? v76 : false;
      
      const txn2 = await (ctc.sendrecv(4, 2, stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 5), [ctc2, ctc5, ctc2, ctc2, ctc1, ctc1, ctc1, ctc2], [v25, v31, v32, v33, v34, v157, v87, v101], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1, ctc2], v116, false, stdlib.checkedBigNumberify('./index.rsh:60:106:decimal', stdlib.UInt_max, 10), (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
        const [v118, v119] = txn2.data;
        const v121 = txn2.time;
        const v117 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:78:17:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v33, v118, v119, v121]);
        sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:78:17:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v33, v118, v119]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:78:17:after expr stmt semicolon', stdlib.UInt_max, 1), v33]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn2.didTimeout) {
        const v135 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:61:15:application', stdlib.UInt_max, 134));
        stdlib.protect(ctc3, await interact.seeOutcome(v26, v28, v33), {
          at: './index.rsh:62:32:application',
          fs: ['at ./index.rsh:61:15:application call to [unknown function] (defined at: ./index.rsh:61:38:function exp)'],
          msg: 'seeOutcome',
          who: 'Bidder'
          });
        
        const v137 = stdlib.addressEq(v32, v135);
        
        const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:64:18:dot', stdlib.UInt_max, 5), [ctc2, ctc5, ctc2, ctc2, ctc1, ctc1], [v25, v31, v32, v33, v34, v157], [v34, []], [], v137, false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:64:62:decimal', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('./index.rsh:60:106:decimal', stdlib.UInt_max, 10)), (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:64:18:dot', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:64:18:dot', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
          const [] = txn3.data;
          const v141 = txn3.time;
          const v138 = txn3.from;
          
          sim_r.txns.push({
            amt: v34,
            kind: 'to',
            tok: undefined
            });
          sim_r.txns.push({
            amt: v34,
            kind: 'from',
            to: v33,
            tok: undefined
            });
          const cv31 = false;
          const cv32 = v32;
          const cv33 = v32;
          const cv34 = stdlib.checkedBigNumberify('./index.rsh:74:73:decimal', stdlib.UInt_max, 0);
          const cv35 = true;
          const cv157 = v141;
          
          (() => {
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v34 = cv34;
            const v35 = cv35;
            const v157 = cv157;
            
            if ((() => {
              
              return v35;})()) {
              if (v31) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
                sim_r.isHalt = false;
                }}
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.view = [ctc8, []];
              sim_r.isHalt = true;
              }})();
          return sim_r;
          })));
        if (txn3.didTimeout) {
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:66:37:application',
            fs: ['at ./index.rsh:65:17:application call to [unknown function] (defined at: ./index.rsh:65:40:function exp)'],
            msg: 'informTimeout',
            who: 'Bidder'
            });
          
          const txn4 = await (ctc.sendrecv(6, 0, stdlib.checkedBigNumberify('./index.rsh:69:20:dot', stdlib.UInt_max, 5), [ctc2, ctc5, ctc2, ctc2, ctc1, ctc1], [v25, v31, v32, v33, v34, v157], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:69:20:dot', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:69:20:dot', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
            const [] = txn4.data;
            const v154 = txn4.time;
            const v152 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv31 = false;
            const cv32 = v25;
            const cv33 = v25;
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:70:72:decimal', stdlib.UInt_max, 0);
            const cv35 = true;
            const cv157 = v154;
            
            (() => {
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v34 = cv34;
              const v35 = cv35;
              const v157 = cv157;
              
              if ((() => {
                
                return v35;})()) {
                if (v31) {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc8, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                sim_r.view = [ctc8, []];
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          const [] = txn4.data;
          const v154 = txn4.time;
          const v152 = txn4.from;
          ;
          const cv31 = false;
          const cv32 = v25;
          const cv33 = v25;
          const cv34 = stdlib.checkedBigNumberify('./index.rsh:70:72:decimal', stdlib.UInt_max, 0);
          const cv35 = true;
          const cv157 = v154;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v35 = cv35;
          v157 = cv157;
          
          continue;
          }
        else {
          const [] = txn3.data;
          const v141 = txn3.time;
          const v138 = txn3.from;
          ;
          ;
          const cv31 = false;
          const cv32 = v32;
          const cv33 = v32;
          const cv34 = stdlib.checkedBigNumberify('./index.rsh:74:73:decimal', stdlib.UInt_max, 0);
          const cv35 = true;
          const cv157 = v141;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v35 = cv35;
          v157 = cv157;
          
          continue;}
        }
      else {
        const [v118, v119] = txn2.data;
        const v121 = txn2.time;
        const v117 = txn2.from;
        ;
        stdlib.protect(ctc3, await interact.showBid(v26, v28, v118, v32), {
          at: './index.rsh:81:27:application',
          fs: ['at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:36:function exp)'],
          msg: 'showBid',
          who: 'Bidder'
          });
        
        const txn3 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 4), [ctc2, ctc2, ctc1, ctc2, ctc1], [v25, v33, v118, v119, v121], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 4), v25, v33, v118, v119, v121]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 4), v25, v33, v118, v119]);
          const [] = txn3.data;
          const v130 = txn3.time;
          const v128 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv31 = true;
          const cv32 = v119;
          const cv33 = v33;
          const cv34 = v118;
          const cv35 = true;
          const cv157 = v130;
          
          (() => {
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v34 = cv34;
            const v35 = cv35;
            const v157 = cv157;
            
            if ((() => {
              
              return v35;})()) {
              if (v31) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
                sim_r.isHalt = false;
                }}
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.view = [ctc8, []];
              sim_r.isHalt = true;
              }})();
          return sim_r;
          })));
        const [] = txn3.data;
        const v130 = txn3.time;
        const v128 = txn3.from;
        ;
        const cv31 = true;
        const cv32 = v119;
        const cv33 = v33;
        const cv34 = v118;
        const cv35 = true;
        const cv157 = v130;
        
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v34 = cv34;
        v35 = cv35;
        v157 = cv157;
        
        continue;
        }
      }
    else {
      const v50 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:41:15:application', stdlib.UInt_max, 49));
      const v52 = stdlib.addressEq(v50, v33);
      let v54;
      if (v52) {
        const v53 = stdlib.protect(ctc5, await interact.isAuctionOn(v26, v28), {
          at: './index.rsh:42:81:application',
          fs: ['at ./index.rsh:41:15:application call to [unknown function] (defined at: ./index.rsh:41:38:function exp)'],
          msg: 'isAuctionOn',
          who: 'Bidder'
          });
        v54 = v53;
        }
      else {
        v54 = true;
        }
      
      const v55 = stdlib.addressEq(v33, v50);
      
      const txn2 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:45:19:dot', stdlib.UInt_max, 5), [ctc2, ctc5, ctc2, ctc2, ctc1, ctc1, ctc5], [v25, v31, v32, v33, v34, v157, v54], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc5], v55, false, false, (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:45:19:dot', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:45:19:dot', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
        const [v58] = txn2.data;
        const v60 = txn2.time;
        const v57 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        if (v58) {
          sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 8), v25, v32, v33, v34, v60]);
          sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 8), v25, v32, v33, v34]);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 4), v33]];
          sim_r.isHalt = false;
          }
        else {
          
          const cv31 = v31;
          const cv32 = v32;
          const cv33 = v33;
          const cv34 = v34;
          const cv35 = v58;
          const cv157 = v60;
          
          (() => {
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v34 = cv34;
            const v35 = cv35;
            const v157 = cv157;
            
            if ((() => {
              
              return v35;})()) {
              if (v31) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
                sim_r.isHalt = false;
                }}
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.view = [ctc8, []];
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        })));
      const [v58] = txn2.data;
      const v60 = txn2.time;
      const v57 = txn2.from;
      ;
      if (v58) {
        const v71 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:55:20:application', stdlib.UInt_max, 70));
        const v74 = stdlib.addressEq(v71, v32);
        const v76 = v74 ? false : true;
        const v80 = stdlib.addressEq(v71, v33);
        const v82 = v80 ? false : true;
        const v85 = v74 ? false : v82;
        let v87;
        if (v85) {
          const v86 = stdlib.protect(ctc1, await interact.getBid(v26, v28), {
            at: './index.rsh:56:93:application',
            fs: ['at ./index.rsh:55:20:application call to [unknown function] (defined at: ./index.rsh:55:24:function exp)'],
            msg: 'getBid',
            who: 'Bidder'
            });
          v87 = v86;
          }
        else {
          v87 = v34;
          }
        const v101 = v85 ? v71 : v32;
        
        const v102 = stdlib.gt(v87, v34);
        const v104 = stdlib.addressEq(v33, v71);
        const v106 = v104 ? false : true;
        const v109 = v102 ? v106 : false;
        const v116 = v109 ? v76 : false;
        
        const txn3 = await (ctc.sendrecv(9, 2, stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 4), [ctc2, ctc2, ctc2, ctc1, ctc1, ctc1, ctc2], [v25, v32, v33, v34, v60, v87, v101], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1, ctc2], v116, false, stdlib.checkedBigNumberify('./index.rsh:60:106:decimal', stdlib.UInt_max, 10), (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 8), v25, v32, v33, v34, v60]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:60:16:dot', stdlib.UInt_max, 8), v25, v32, v33, v34]);
          const [v118, v119] = txn3.data;
          const v121 = txn3.time;
          const v117 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:78:17:after expr stmt semicolon', stdlib.UInt_max, 9), v25, v33, v118, v119, v121]);
          sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:78:17:after expr stmt semicolon', stdlib.UInt_max, 9), v25, v33, v118, v119]);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:78:17:after expr stmt semicolon', stdlib.UInt_max, 3), v33]];
          sim_r.isHalt = false;
          
          return sim_r;
          })));
        if (txn3.didTimeout) {
          const v135 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:61:15:application', stdlib.UInt_max, 134));
          stdlib.protect(ctc3, await interact.seeOutcome(v26, v28, v33), {
            at: './index.rsh:62:32:application',
            fs: ['at ./index.rsh:61:15:application call to [unknown function] (defined at: ./index.rsh:61:38:function exp)'],
            msg: 'seeOutcome',
            who: 'Bidder'
            });
          
          const v137 = stdlib.addressEq(v32, v135);
          
          const txn4 = await (ctc.sendrecv(10, 0, stdlib.checkedBigNumberify('./index.rsh:64:18:dot', stdlib.UInt_max, 4), [ctc2, ctc2, ctc2, ctc1, ctc1], [v25, v32, v33, v34, v60], [v34, []], [], v137, false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:64:62:decimal', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('./index.rsh:60:106:decimal', stdlib.UInt_max, 10)), (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:64:18:dot', stdlib.UInt_max, 8), v25, v32, v33, v34, v60]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:64:18:dot', stdlib.UInt_max, 8), v25, v32, v33, v34]);
            const [] = txn4.data;
            const v141 = txn4.time;
            const v138 = txn4.from;
            
            sim_r.txns.push({
              amt: v34,
              kind: 'to',
              tok: undefined
              });
            sim_r.txns.push({
              amt: v34,
              kind: 'from',
              to: v33,
              tok: undefined
              });
            const cv31 = false;
            const cv32 = v32;
            const cv33 = v32;
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:74:73:decimal', stdlib.UInt_max, 0);
            const cv35 = true;
            const cv157 = v141;
            
            (() => {
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v34 = cv34;
              const v35 = cv35;
              const v157 = cv157;
              
              if ((() => {
                
                return v35;})()) {
                if (v31) {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc8, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                sim_r.view = [ctc8, []];
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          if (txn4.didTimeout) {
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:66:37:application',
              fs: ['at ./index.rsh:65:17:application call to [unknown function] (defined at: ./index.rsh:65:40:function exp)'],
              msg: 'informTimeout',
              who: 'Bidder'
              });
            
            const txn5 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('./index.rsh:69:20:dot', stdlib.UInt_max, 4), [ctc2, ctc2, ctc2, ctc1, ctc1], [v25, v32, v33, v34, v60], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:69:20:dot', stdlib.UInt_max, 8), v25, v32, v33, v34, v60]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:69:20:dot', stdlib.UInt_max, 8), v25, v32, v33, v34]);
              const [] = txn5.data;
              const v154 = txn5.time;
              const v152 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const cv31 = false;
              const cv32 = v25;
              const cv33 = v25;
              const cv34 = stdlib.checkedBigNumberify('./index.rsh:70:72:decimal', stdlib.UInt_max, 0);
              const cv35 = true;
              const cv157 = v154;
              
              (() => {
                const v31 = cv31;
                const v32 = cv32;
                const v33 = cv33;
                const v34 = cv34;
                const v35 = cv35;
                const v157 = cv157;
                
                if ((() => {
                  
                  return v35;})()) {
                  if (v31) {
                    sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                    sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                    sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
                    sim_r.isHalt = false;
                    }}
                else {
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.nextSt = stdlib.digest(ctc8, []);
                  sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                  sim_r.view = [ctc8, []];
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              })));
            const [] = txn5.data;
            const v154 = txn5.time;
            const v152 = txn5.from;
            ;
            const cv31 = false;
            const cv32 = v25;
            const cv33 = v25;
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:70:72:decimal', stdlib.UInt_max, 0);
            const cv35 = true;
            const cv157 = v154;
            
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v34 = cv34;
            v35 = cv35;
            v157 = cv157;
            
            continue;
            }
          else {
            const [] = txn4.data;
            const v141 = txn4.time;
            const v138 = txn4.from;
            ;
            ;
            const cv31 = false;
            const cv32 = v32;
            const cv33 = v32;
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:74:73:decimal', stdlib.UInt_max, 0);
            const cv35 = true;
            const cv157 = v141;
            
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v34 = cv34;
            v35 = cv35;
            v157 = cv157;
            
            continue;}
          }
        else {
          const [v118, v119] = txn3.data;
          const v121 = txn3.time;
          const v117 = txn3.from;
          ;
          stdlib.protect(ctc3, await interact.showBid(v26, v28, v118, v32), {
            at: './index.rsh:81:27:application',
            fs: ['at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:36:function exp)'],
            msg: 'showBid',
            who: 'Bidder'
            });
          
          const txn4 = await (ctc.sendrecv(12, 0, stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 4), [ctc2, ctc2, ctc1, ctc2, ctc1], [v25, v33, v118, v119, v121], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 9), v25, v33, v118, v119, v121]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 9), v25, v33, v118, v119]);
            const [] = txn4.data;
            const v130 = txn4.time;
            const v128 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv31 = true;
            const cv32 = v119;
            const cv33 = v33;
            const cv34 = v118;
            const cv35 = true;
            const cv157 = v130;
            
            (() => {
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v34 = cv34;
              const v35 = cv35;
              const v157 = cv157;
              
              if ((() => {
                
                return v35;})()) {
                if (v31) {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc8, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                sim_r.view = [ctc8, []];
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          const [] = txn4.data;
          const v130 = txn4.time;
          const v128 = txn4.from;
          ;
          const cv31 = true;
          const cv32 = v119;
          const cv33 = v33;
          const cv34 = v118;
          const cv35 = true;
          const cv157 = v130;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v35 = cv35;
          v157 = cv157;
          
          continue;
          }
        }
      else {
        stdlib.protect(ctc3, await interact.seeOutcome(v26, v28, v33), {
          at: './index.rsh:48:34:application',
          fs: ['at ./index.rsh:47:17:application call to [unknown function] (defined at: ./index.rsh:47:40:function exp)'],
          msg: 'seeOutcome',
          who: 'Bidder'
          });
        
        const cv31 = v31;
        const cv32 = v32;
        const cv33 = v33;
        const cv34 = v34;
        const cv35 = v58;
        const cv157 = v60;
        
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v34 = cv34;
        v35 = cv35;
        v157 = cv157;
        
        continue;}
      }}
  return;
  
  };
export async function Creator(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 150));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc2, ctc5, ctc2, ctc2, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc2, ctc5, ctc2, ctc2, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc2, ctc2, ctc0, ctc2, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc2, ctc2, ctc0, ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc2, ctc2, ctc2, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc2, ctc2, ctc2, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0]);
  
  
  const v21 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.deadline, 'for Creator\'s interact field deadline');
  const v19 = stdlib.protect(ctc1, interact.getId, 'for Creator\'s interact field getId');
  const v20 = stdlib.protect(ctc1, interact.nftViewAddress, 'for Creator\'s interact field nftViewAddress');
  
  const txn1 = await (ctc.sendrecv(1, 3, stdlib.checkedBigNumberify('./index.rsh:32:15:dot', stdlib.UInt_max, 0), [ctc0, ctc1, ctc0, ctc1], [v21, v19, v18, v20], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc1, ctc0, ctc1], true, true, false, (async (txn1) => {
    const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
    
    sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:32:15:dot', stdlib.UInt_max, 0), v21]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:32:15:dot', stdlib.UInt_max, 0)]);
    const [v26, v27, v28] = txn1.data;
    const v30 = txn1.time;
    const v25 = txn1.from;
    
    sim_r.txns.push({
      amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
      kind: 'to',
      tok: undefined
      });
    const v31 = false;
    const v32 = v25;
    const v33 = v25;
    const v34 = stdlib.checkedBigNumberify('./index.rsh:34:70:decimal', stdlib.UInt_max, 0);
    const v35 = true;
    const v157 = v30;
    
    if ((() => {
      
      return v35;})()) {
      if (v31) {
        sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
        sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
        sim_r.isHalt = false;
        }
      else {
        sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
        sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
        sim_r.isHalt = false;
        }}
    else {
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.nextSt = stdlib.digest(ctc8, []);
      sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
      sim_r.view = [ctc8, []];
      sim_r.isHalt = true;
      }
    return sim_r;
    })));
  const [v26, v27, v28] = txn1.data;
  const v30 = txn1.time;
  const v25 = txn1.from;
  ;
  let v31 = false;
  let v32 = v25;
  let v33 = v25;
  let v34 = stdlib.checkedBigNumberify('./index.rsh:34:70:decimal', stdlib.UInt_max, 0);
  let v35 = true;
  let v157 = v30;
  
  while ((() => {
    
    return v35;})()) {
    if (v31) {
      const txn2 = await (ctc.recv(4, 2, [ctc0, ctc2], false, stdlib.checkedBigNumberify('./index.rsh:60:106:decimal', stdlib.UInt_max, 10)));
      if (txn2.didTimeout) {
        stdlib.protect(ctc3, await interact.seeOutcome(v26, v28, v33), {
          at: './index.rsh:62:32:application',
          fs: ['at ./index.rsh:61:15:application call to [unknown function] (defined at: ./index.rsh:61:38:function exp)'],
          msg: 'seeOutcome',
          who: 'Creator'
          });
        
        const txn3 = await (ctc.recv(5, 0, [], false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:64:62:decimal', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('./index.rsh:60:106:decimal', stdlib.UInt_max, 10))));
        if (txn3.didTimeout) {
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:66:37:application',
            fs: ['at ./index.rsh:65:17:application call to [unknown function] (defined at: ./index.rsh:65:40:function exp)'],
            msg: 'informTimeout',
            who: 'Creator'
            });
          
          const txn4 = await (ctc.recv(6, 0, [], false, false));
          const [] = txn4.data;
          const v154 = txn4.time;
          const v152 = txn4.from;
          ;
          const cv31 = false;
          const cv32 = v25;
          const cv33 = v25;
          const cv34 = stdlib.checkedBigNumberify('./index.rsh:70:72:decimal', stdlib.UInt_max, 0);
          const cv35 = true;
          const cv157 = v154;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v35 = cv35;
          v157 = cv157;
          
          continue;
          }
        else {
          const [] = txn3.data;
          const v141 = txn3.time;
          const v138 = txn3.from;
          ;
          ;
          const cv31 = false;
          const cv32 = v32;
          const cv33 = v32;
          const cv34 = stdlib.checkedBigNumberify('./index.rsh:74:73:decimal', stdlib.UInt_max, 0);
          const cv35 = true;
          const cv157 = v141;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v35 = cv35;
          v157 = cv157;
          
          continue;}
        }
      else {
        const [v118, v119] = txn2.data;
        const v121 = txn2.time;
        const v117 = txn2.from;
        ;
        stdlib.protect(ctc3, await interact.showBid(v26, v28, v118, v32), {
          at: './index.rsh:81:27:application',
          fs: ['at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:36:function exp)'],
          msg: 'showBid',
          who: 'Creator'
          });
        
        const txn3 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 4), [ctc2, ctc2, ctc0, ctc2, ctc0], [v25, v33, v118, v119, v121], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 4), v25, v33, v118, v119, v121]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 4), v25, v33, v118, v119]);
          const [] = txn3.data;
          const v130 = txn3.time;
          const v128 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv31 = true;
          const cv32 = v119;
          const cv33 = v33;
          const cv34 = v118;
          const cv35 = true;
          const cv157 = v130;
          
          (() => {
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v34 = cv34;
            const v35 = cv35;
            const v157 = cv157;
            
            if ((() => {
              
              return v35;})()) {
              if (v31) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
                sim_r.isHalt = false;
                }}
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.view = [ctc8, []];
              sim_r.isHalt = true;
              }})();
          return sim_r;
          })));
        const [] = txn3.data;
        const v130 = txn3.time;
        const v128 = txn3.from;
        ;
        const cv31 = true;
        const cv32 = v119;
        const cv33 = v33;
        const cv34 = v118;
        const cv35 = true;
        const cv157 = v130;
        
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v34 = cv34;
        v35 = cv35;
        v157 = cv157;
        
        continue;
        }
      }
    else {
      const v46 = stdlib.addressEq(v25, v33);
      let v48;
      if (v46) {
        const v47 = stdlib.protect(ctc5, await interact.isAuctionOn(v26, v28), {
          at: './index.rsh:42:81:application',
          fs: ['at ./index.rsh:41:15:application call to [unknown function] (defined at: ./index.rsh:41:38:function exp)'],
          msg: 'isAuctionOn',
          who: 'Creator'
          });
        v48 = v47;
        }
      else {
        v48 = true;
        }
      
      const v56 = stdlib.addressEq(v33, v25);
      
      const txn2 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:45:19:dot', stdlib.UInt_max, 5), [ctc2, ctc5, ctc2, ctc2, ctc0, ctc0, ctc5], [v25, v31, v32, v33, v34, v157, v48], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc5], v56, false, false, (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:45:19:dot', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:45:19:dot', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
        const [v58] = txn2.data;
        const v60 = txn2.time;
        const v57 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        if (v58) {
          sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 8), v25, v32, v33, v34, v60]);
          sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 8), v25, v32, v33, v34]);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 4), v33]];
          sim_r.isHalt = false;
          }
        else {
          
          const cv31 = v31;
          const cv32 = v32;
          const cv33 = v33;
          const cv34 = v34;
          const cv35 = v58;
          const cv157 = v60;
          
          (() => {
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v34 = cv34;
            const v35 = cv35;
            const v157 = cv157;
            
            if ((() => {
              
              return v35;})()) {
              if (v31) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
                sim_r.isHalt = false;
                }}
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.nextSt = stdlib.digest(ctc8, []);
              sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
              sim_r.view = [ctc8, []];
              sim_r.isHalt = true;
              }})();}
        return sim_r;
        })));
      const [v58] = txn2.data;
      const v60 = txn2.time;
      const v57 = txn2.from;
      ;
      if (v58) {
        const txn3 = await (ctc.recv(9, 2, [ctc0, ctc2], false, stdlib.checkedBigNumberify('./index.rsh:60:106:decimal', stdlib.UInt_max, 10)));
        if (txn3.didTimeout) {
          stdlib.protect(ctc3, await interact.seeOutcome(v26, v28, v33), {
            at: './index.rsh:62:32:application',
            fs: ['at ./index.rsh:61:15:application call to [unknown function] (defined at: ./index.rsh:61:38:function exp)'],
            msg: 'seeOutcome',
            who: 'Creator'
            });
          
          const txn4 = await (ctc.recv(10, 0, [], false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:64:62:decimal', stdlib.UInt_max, 20), stdlib.checkedBigNumberify('./index.rsh:60:106:decimal', stdlib.UInt_max, 10))));
          if (txn4.didTimeout) {
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:66:37:application',
              fs: ['at ./index.rsh:65:17:application call to [unknown function] (defined at: ./index.rsh:65:40:function exp)'],
              msg: 'informTimeout',
              who: 'Creator'
              });
            
            const txn5 = await (ctc.recv(11, 0, [], false, false));
            const [] = txn5.data;
            const v154 = txn5.time;
            const v152 = txn5.from;
            ;
            const cv31 = false;
            const cv32 = v25;
            const cv33 = v25;
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:70:72:decimal', stdlib.UInt_max, 0);
            const cv35 = true;
            const cv157 = v154;
            
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v34 = cv34;
            v35 = cv35;
            v157 = cv157;
            
            continue;
            }
          else {
            const [] = txn4.data;
            const v141 = txn4.time;
            const v138 = txn4.from;
            ;
            ;
            const cv31 = false;
            const cv32 = v32;
            const cv33 = v32;
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:74:73:decimal', stdlib.UInt_max, 0);
            const cv35 = true;
            const cv157 = v141;
            
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v34 = cv34;
            v35 = cv35;
            v157 = cv157;
            
            continue;}
          }
        else {
          const [v118, v119] = txn3.data;
          const v121 = txn3.time;
          const v117 = txn3.from;
          ;
          stdlib.protect(ctc3, await interact.showBid(v26, v28, v118, v32), {
            at: './index.rsh:81:27:application',
            fs: ['at ./index.rsh:80:13:application call to [unknown function] (defined at: ./index.rsh:80:36:function exp)'],
            msg: 'showBid',
            who: 'Creator'
            });
          
          const txn4 = await (ctc.sendrecv(12, 0, stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 4), [ctc2, ctc2, ctc0, ctc2, ctc0], [v25, v33, v118, v119, v121], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 9), v25, v33, v118, v119, v121]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:83:17:dot', stdlib.UInt_max, 9), v25, v33, v118, v119]);
            const [] = txn4.data;
            const v130 = txn4.time;
            const v128 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv31 = true;
            const cv32 = v119;
            const cv33 = v33;
            const cv34 = v118;
            const cv35 = true;
            const cv157 = v130;
            
            (() => {
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v34 = cv34;
              const v35 = cv35;
              const v157 = cv157;
              
              if ((() => {
                
                return v35;})()) {
                if (v31) {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:54:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34, v157]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:39:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
                  sim_r.isHalt = false;
                  }}
              else {
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.nextSt = stdlib.digest(ctc8, []);
                sim_r.nextSt_noTime = stdlib.digest(ctc8, []);
                sim_r.view = [ctc8, []];
                sim_r.isHalt = true;
                }})();
            return sim_r;
            })));
          const [] = txn4.data;
          const v130 = txn4.time;
          const v128 = txn4.from;
          ;
          const cv31 = true;
          const cv32 = v119;
          const cv33 = v33;
          const cv34 = v118;
          const cv35 = true;
          const cv157 = v130;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v35 = cv35;
          v157 = cv157;
          
          continue;
          }
        }
      else {
        stdlib.protect(ctc3, await interact.seeOutcome(v26, v28, v33), {
          at: './index.rsh:48:34:application',
          fs: ['at ./index.rsh:47:17:application call to [unknown function] (defined at: ./index.rsh:47:40:function exp)'],
          msg: 'seeOutcome',
          who: 'Creator'
          });
        
        const cv31 = v31;
        const cv32 = v32;
        const cv33 = v33;
        const cv34 = v34;
        const cv35 = v58;
        const cv157 = v60;
        
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v34 = cv34;
        v35 = cv35;
        v157 = cv157;
        
        continue;}
      }}
  return;
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
txn RekeyTo
global ZeroAddress
==
assert
txn OnCompletion
int OptIn
==
bz normal
global GroupSize
int 1
==
assert
b done
normal:
gtxna 0 ApplicationArgs 8
store 5
// Check that everyone's here
global GroupSize
int 3
>=
assert
// Check txnAppl (us)
txn GroupIndex
int 0
==
assert
// Check txnFromHandler
int 0
gtxn 2 Sender
byte "{{m1}}"
==
||
gtxn 2 Sender
byte "{{m4}}"
==
||
gtxn 2 Sender
byte "{{m5}}"
==
||
gtxn 2 Sender
byte "{{m6}}"
==
||
gtxn 2 Sender
byte "{{m7}}"
==
||
gtxn 2 Sender
byte "{{m8}}"
==
||
gtxn 2 Sender
byte "{{m9}}"
==
||
gtxn 2 Sender
byte "{{m10}}"
==
||
gtxn 2 Sender
byte "{{m11}}"
==
||
gtxn 2 Sender
byte "{{m12}}"
==
||
assert
byte base64(cw==)
app_global_get
gtxna 0 ApplicationArgs 0
==
assert
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
byte base64(bA==)
global Round
app_global_put
int 0
txn NumAccounts
==
assert
byte base64(djA=)
gtxna 0 ApplicationArgs 2
substring 0 40
app_global_put
byte base64(aA==)
gtxna 0 ApplicationArgs 3
btoi
app_global_put
byte base64(aA==)
app_global_get
bnz halted
txn OnCompletion
int NoOp
==
assert
b done
halted:
txn OnCompletion
int DeleteApplication
==
assert
done:
int 1
return
`,
  appApproval0: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
txn Sender
byte "{{Deployer}}"
==
assert
txn ApplicationID
bz init
global GroupSize
int 2
==
assert
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Amount
int 100000
==
assert
// We don't check the receiver, because we don't know it yet, because the escrow account embeds our id
// We don't check the sender, because we don't care... anyone is allowed to fund it. We'll give it back to the deployer, though.
txn OnCompletion
int UpdateApplication
==
assert
byte base64(cw==)
// compute state in HM_Set 0
int 0
itob
keccak256
app_global_put
byte base64(bA==)
global Round
app_global_put
byte base64(djA=)
byte base64()
app_global_put
byte base64(aA==)
int 0
app_global_put
b done
init:
global GroupSize
int 1
==
assert
txn OnCompletion
int NoOp
==
assert
done:
int 1
return
`,
  appClear: `#pragma version 3
// We're alone
global GroupSize
int 1
==
assert
// We're halted
byte base64(aA==)
app_global_get
int 1
==
assert
done:
int 1
return
`,
  ctc: `#pragma version 3
// Check size
global GroupSize
int 3
>=
assert
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
// Don't check anything else, because app does
// Check us
txn TypeEnum
int pay
==
int axfer
dup2
==
||
assert
txn RekeyTo
global ZeroAddress
==
assert
txn GroupIndex
int 3
>=
assert
done:
int 1
return
`,
  mapArgSize: 165,
  mapDataKeys: 0,
  mapDataSize: 0,
  mapRecordSize: 33,
  stepargs: [null, {
    count: 9,
    size: 594
    }, null, null, {
    count: 9,
    size: 431
    }, {
    count: 9,
    size: 391
    }, {
    count: 9,
    size: 391
    }, {
    count: 9,
    size: 390
    }, {
    count: 9,
    size: 392
    }, {
    count: 9,
    size: 430
    }, {
    count: 9,
    size: 390
    }, {
    count: 9,
    size: 390
    }, {
    count: 9,
    size: 390
    }],
  steps: [null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 7
dup
substring 0 150
store 255
dup
substring 150 158
btoi
store 254
dup
int 158
int 308
substring3
store 253
pop
// Handler 1
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 0
int 0
itob
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:32:15:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 5
itob
gtxn 0 Sender
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
gtxn 0 Sender
concat
int 0
itob // bool
substring 7 8
concat
gtxn 0 Sender
concat
gtxn 0 Sender
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, null, null, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 33
btoi
store 254
dup
substring 33 65
store 253
dup
substring 65 97
store 252
dup
substring 97 105
btoi
store 251
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 250
dup
substring 8 40
store 249
pop
// Handler 4
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob // bool
substring 7 8
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:60:16:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 1
itob
load 252
concat
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 252
concat
load 250
itob
concat
load 249
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 33
btoi
store 254
dup
substring 33 65
store 253
dup
substring 65 97
store 252
dup
substring 97 105
btoi
store 251
pop
// Handler 5
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob // bool
substring 7 8
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:64:18:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 251
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 252
==
assert
gtxn 4 Amount
load 251
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 5
itob
load 253
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
int 0
itob // bool
substring 7 8
concat
load 253
concat
load 253
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 5
==
assert
load 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
pop
load 4
btoi
int 10
int 20
+
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
dup
gtxn 4 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 33
btoi
store 254
dup
substring 33 65
store 253
dup
substring 65 97
store 252
dup
substring 97 105
btoi
store 251
pop
// Handler 6
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob // bool
substring 7 8
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:69:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 5
itob
load 255
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
int 0
itob // bool
substring 7 8
concat
load 255
concat
load 255
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
int 20
+
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
substring 72 104
store 252
pop
// Handler 7
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 4
int 4
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:83:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 2
itob
load 254
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
int 1
itob // bool
substring 7 8
concat
load 252
concat
load 254
concat
load 253
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 33
btoi
store 254
dup
substring 33 65
store 253
dup
substring 65 97
store 252
dup
substring 97 105
btoi
store 251
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 250
pop
// Handler 8
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 2
int 2
itob
load 255
concat
load 254
itob // bool
substring 7 8
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:45:19:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
load 250
bz l0
// check view bs
int 4
itob
load 252
concat
load 1
==
assert
// compute state in HM_Set 8
int 8
itob
load 255
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l0:
load 250
bz l1
load 254
bz l2
// check view bs
int 2
itob
load 252
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
load 254
itob // bool
substring 7 8
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l2:
// check view bs
int 5
itob
load 252
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
load 254
itob // bool
substring 7 8
concat
load 253
concat
load 252
concat
load 251
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
b checkAccts
l1:
byte base64(AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==)
load 1
==
assert
gtxn 4 TypeEnum
int pay
==
assert
// We don't check the receiver
gtxn 4 Amount
int 0
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
gtxn 4 CloseRemainderTo
byte "{{Deployer}}"
==
assert
load 2
btoi
int 1
==
assert
// Check GroupSize
global GroupSize
int 5
==
assert
load 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 251
dup
substring 8 40
store 250
pop
// Handler 9
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:60:16:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 3
itob
load 253
concat
load 1
==
assert
// compute state in HM_Set 9
int 9
itob
load 255
concat
load 253
concat
load 251
itob
concat
load 250
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
pop
// Handler 10
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:64:18:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
-
load 252
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 253
==
assert
gtxn 4 Amount
load 252
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
// check view bs
int 5
itob
load 254
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
int 0
itob // bool
substring 7 8
concat
load 254
concat
load 254
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 5
==
assert
load 3
btoi
gtxn 4 Fee
==
assert
// Check time limits
load 4
btoi
int 10
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
dup
gtxn 4 FirstValid
<=
assert
pop
load 4
btoi
int 10
int 20
+
+
dup
gtxn 0 LastValid
>=
assert
dup
gtxn 1 LastValid
>=
assert
dup
gtxn 2 LastValid
>=
assert
dup
gtxn 3 LastValid
>=
assert
dup
gtxn 4 LastValid
>=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 96
store 253
dup
substring 96 104
btoi
store 252
pop
// Handler 11
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 8
int 8
itob
load 255
concat
load 254
concat
load 253
concat
load 252
itob
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:69:20:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 5
itob
load 255
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
int 0
itob // bool
substring 7 8
concat
load 255
concat
load 255
concat
int 0
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
load 4
btoi
int 10
int 20
+
+
dup
gtxn 0 FirstValid
<=
assert
dup
gtxn 1 FirstValid
<=
assert
dup
gtxn 2 FirstValid
<=
assert
dup
gtxn 3 FirstValid
<=
assert
pop
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`, `#pragma version 3
gtxna 0 ApplicationArgs 1
store 0
gtxna 0 ApplicationArgs 2
store 1
gtxna 0 ApplicationArgs 3
store 2
gtxna 0 ApplicationArgs 4
store 3
gtxna 0 ApplicationArgs 5
store 4
gtxna 0 ApplicationArgs 8
store 5
int 0
store 6
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 64
store 254
dup
substring 64 72
btoi
store 253
dup
substring 72 104
store 252
pop
// Handler 12
// Check txnAppl
gtxn 0 TypeEnum
int appl
==
assert
gtxn 0 ApplicationID
byte "{{ApplicationID}}"
btoi
==
assert
gtxn 0 NumAppArgs
int 9
==
assert
// Check txnToHandler
gtxn 1 TypeEnum
int pay
==
assert
gtxn 1 Receiver
txn Sender
==
assert
gtxn 1 Amount
gtxn 2 Fee
int 100000
+
==
assert
// Check txnFromHandler (us)
txn GroupIndex
int 2
==
assert
txn TypeEnum
int pay
==
assert
txn Amount
int 0
==
assert
txn Receiver
gtxn 1 Sender
==
assert
// compute state in HM_Check 9
int 9
itob
load 255
concat
load 254
concat
load 253
itob
concat
load 252
concat
keccak256
gtxna 0 ApplicationArgs 0
==
assert
txn CloseRemainderTo
gtxn 1 Sender
==
assert
// Run body
// "CheckPay"
// "./index.rsh:83:17:dot"
// "[]"
gtxn 3 TypeEnum
int pay
==
assert
gtxn 3 Receiver
byte "{{ContractAddr}}"
==
assert
gtxn 3 Amount
load 3
btoi
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
// check view bs
int 2
itob
load 254
concat
load 1
==
assert
// compute state in HM_Set 2
int 2
itob
load 255
concat
int 1
itob // bool
substring 7 8
concat
load 252
concat
load 254
concat
load 253
itob
concat
keccak256
load 0
==
assert
load 2
btoi
int 0
==
assert
// Check GroupSize
global GroupSize
int 4
==
assert
load 3
btoi
int 0
==
assert
// Check time limits
checkAccts:
gtxn 0 NumAccounts
load 6
==
assert
done:
int 1
return
`],
  unsupported: [],
  version: 1,
  viewKeys: 1,
  viewSize: 40
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v21",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[150]",
                "name": "v26",
                "type": "uint8[150]"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint8[150]",
                "name": "v28",
                "type": "uint8[150]"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v119",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v121",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v31",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v119",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v31",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v31",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v119",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v121",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v31",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v58",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v119",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "NFT_owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v21",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint8[150]",
                "name": "v26",
                "type": "uint8[150]"
              },
              {
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "uint8[150]",
                "name": "v28",
                "type": "uint8[150]"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v119",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v121",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v31",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v119",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v31",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v31",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v119",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v121",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v31",
                "type": "bool"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v157",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v58",
                "type": "bool"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v25",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v32",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v34",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v60",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v118",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v119",
                "type": "address"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382526000600181905583519182018190529192016040516020818303038152906040526002908051906020019062000072929190620000b4565b50506040805160208082018352600080835293518252825180820185905291518284015282518083038401815260609092019092528051910120905562000197565b828054620000c2906200015a565b90600052602060002090601f016020900481019282620000e6576000855562000131565b82601f106200010157805160ff191683800117855562000131565b8280016001018555821562000131579182015b828111156200013157825182559160200191906001019062000114565b506200013f92915062000143565b5090565b5b808211156200013f576000815560010162000144565b6002810460018216806200016f57607f821691505b602082108114156200019157634e487b7160e01b600052602260045260246000fd5b50919050565b61189b80620001a76000396000f3fe6080604052600436106100a05760003560e01c8063bc0ca2f311610064578063bc0ca2f31461012b578063d95c942f1461013e578063db7edf3d14610151578063dbf62f1814610164578063e633668e14610177578063f9c6a2331461018a576100a7565b80632df46cf4146100ac578063358182d3146100c1578063489ef15a146100d45780635cf275dd146100e75780638dab222014610118576100a7565b366100a757005b600080fd5b6100bf6100ba366004611415565b61019d565b005b6100bf6100cf366004611415565b610352565b6100bf6100e2366004611403565b610642565b3480156100f357600080fd5b506100fc6107fa565b6040516001600160a01b03909116815260200160405180910390f35b6100bf6101263660046114a2565b61091b565b6100bf610139366004611430565b6109ec565b6100bf61014c366004611415565b610b63565b6100bf61015f366004611430565b610cfb565b6100bf610172366004611415565b610e21565b6100bf610185366004611430565b610f26565b6100bf610198366004611430565b610f9e565b6040516101b1906002908390602001611788565b6040516020818303038152906040528051906020012060001c600054146101d757600080fd5b600080556101ea600a60a08301356117f7565b43101580156102125750600a610205601460a08401356117f7565b61020f91906117f7565b43105b61021b57600080fd5b3460808201351461022b57600080fd5b61023b60808201606083016113c6565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f19350505050158015610276573d6000803e3d6000fd5b507feb3248ee5963d5dc793eac0bd5c78f4353bb98ca05eb56307ce0ab29784c1934816040516102a6919061165d565b60405180910390a16102b661126b565b6102c360208301836113c6565b81516001600160a01b0390911690526020810151600090526102eb60608301604084016113c6565b6020808301516001600160a01b0390921691015261030f60608301604084016113c6565b6020820180516001600160a01b039092166040909201919091528051600060609091015280516001608090910152514360a09091015261034e8161103d565b5050565b604051610366906002908390602001611788565b6040516020818303038152906040528051906020012060001c6000541461038c57600080fd5b60008055341561039b57600080fd5b6103ab60e0820160c083016113e9565b1561053d577f987e13662f624cf716b328c10cdf46a875b1b4371359e6195741c333aab37ea0816040516103df919061165d565b60405180910390a160408051602081019091526000815261040660808301606084016113c6565b6001600160a01b031680825260046001556040805160208082019390935281518082038401815290820190915280516104439260029201906112b8565b506040805160a081018252600080825260208083018290529282018190526060820181905260808201529061047a908401846113c6565b6001600160a01b0316815261049560608401604085016113c6565b6001600160a01b031660208201526104b360808401606085016113c6565b6001600160a01b03908116604083810191825260808681013560608087019182524383880190815284516008602080830191909152895189169682019690965294880151871691850191909152935190941690820152915160a08301525160c082015260e0015b60408051601f1981840301815291905280516020909101206000555061063f9050565b7f987e13662f624cf716b328c10cdf46a875b1b4371359e6195741c333aab37ea08160405161056c919061165d565b60405180910390a161057c61126b565b61058960208301836113c6565b81516001600160a01b0390911690526105a860408301602084016113e9565b602082015190151590526105c260608301604084016113c6565b6020808301516001600160a01b039092169101526105e660808301606084016113c6565b6020820180516001600160a01b0390921660409092019190915251608083013560609091015261061c60e0830160c084016113e9565b602082018051911515608090920191909152514360a09091015261034e8161103d565b50565b604051610656906002908390602001611788565b6040516020818303038152906040528051906020012060001c6000541461067c57600080fd5b6000805561068f600a60a08301356117f7565b431061069a57600080fd5b34156106a557600080fd5b7f0469bf783bd4478b35a4199698773f1a79d3e3265fbc379f762317cfdd279476816040516106d49190611638565b60405180910390a16040805160208101909152600081526106fb60808301606084016113c6565b6001600160a01b0316808252600180556040805160208082019390935281518082038401815290820190915280516107379260029201906112b8565b506040805160a081018252600080825260208083018290529282018190526060820181905260808201529061076e908401846113c6565b6001600160a01b0316815261078960808401606085016113c6565b6001600160a01b0316602082015260c083013560408201526107b2610100840160e085016113c6565b6001600160a01b031660608201524360808201526040516107da906004908390602001611727565b60408051601f198184030181529190528051602090910120600055505050565b60006001805414156108b0576000600280546108159061181b565b80601f01602080910402602001604051908101604052809291908181526020018280546108419061181b565b801561088e5780601f106108635761010080835404028352916020019161088e565b820191906000526020600020905b81548152906001019060200180831161087157829003601f168201915b50505050508060200190518101906108a6919061144b565b5191506109189050565b600260015414156108ca576000600280546108159061181b565b600360015414156108e4576000600280546108159061181b565b600460015414156108fe576000600280546108159061181b565b600560015414156100a7576000600280546108159061181b565b90565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c6000541461095857600080fd5b60008055341561096757600080fd5b7f0e517d773f7c4499e5af7ee8f6e2a2a6d8ba0a0ae9161eff670b93a4b10f01ec8160405161099691906116d7565b60405180910390a16109a661126b565b8051339081905260208083018051600090819052815190920183905280516040019290925281516060015280516001608090910152514360a09091015261034e8161103d565b604051610a00906008908390602001611774565b6040516020818303038152906040528051906020012060001c60005414610a2657600080fd5b60008055610a39600a60808301356117f7565b4310158015610a615750600a610a54601460808401356117f7565b610a5e91906117f7565b43105b610a6a57600080fd5b34606082013514610a7a57600080fd5b610a8a60608201604083016113c6565b6040516001600160a01b039190911690606083013580156108fc02916000818181858888f19350505050158015610ac5573d6000803e3d6000fd5b507f19c885d72fe56e7b48652b1fe5b7722ea0c3f3b5d2168e41801b41814a65af4081604051610af591906116c9565b60405180910390a1610b0561126b565b610b1260208301836113c6565b81516001600160a01b03909116905260208082015160009052610b3b90604084019084016113c6565b6020808301516001600160a01b039092169181019190915261030f90604084019084016113c6565b604051610b77906008908390602001611774565b6040516020818303038152906040528051906020012060001c60005414610b9d57600080fd5b60008055610bb0600a60808301356117f7565b4310610bbb57600080fd5b3415610bc657600080fd5b7f7fe68888f95464a709fe8ab0d7952c086d623c185ae2a7d664dcc69b2fcbf29281604051610bf591906116ab565b60405180910390a1604080516020810190915260008152610c1c60608301604084016113c6565b6001600160a01b03168082526003600155604080516020808201939093528151808203840181529082019091528051610c599260029201906112b8565b506040805160a0810182526000808252602080830182905292820181905260608201819052608082015290610c90908401846113c6565b6001600160a01b03168152610cab60608401604085016113c6565b6001600160a01b0316602082015260a08301356040820152610cd360e0840160c085016113c6565b6001600160a01b031660608201524360808201526040516107da906009908390602001611727565b604051610d0f906004908390602001611713565b6040516020818303038152906040528051906020012060001c60005414610d3557600080fd5b600080553415610d4457600080fd5b7f52e0b8c9f6fbbcaedbe1877c6a2129afbec363781e20a9fbdc0b82d0e9c64b2a81604051610d739190611684565b60405180910390a1610d8361126b565b610d9060208301836113c6565b81516001600160a01b039091169052602081015160019052610db860808301606084016113c6565b6020808301516001600160a01b0390921691810191909152610de090604084019084016113c6565b6020820180516001600160a01b0390921660409283015280519184013560609092019190915280516001608090910152514360a09091015261034e8161103d565b604051610e35906002908390602001611788565b6040516020818303038152906040528051906020012060001c60005414610e5b57600080fd5b60008055600a610e70601460a08401356117f7565b610e7a91906117f7565b431015610e8657600080fd5b3415610e9157600080fd5b7fd955cbb17807de820d98406c826a456d6232deefc5754dd24d1ea2fcaf22381481604051610ec0919061165d565b60405180910390a1610ed061126b565b610edd60208301836113c6565b81516001600160a01b03909116905260208082015160009052610f02908301836113c6565b6020808301516001600160a01b039092169181019190915261030f908301836113c6565b604051610f3a906009908390602001611713565b6040516020818303038152906040528051906020012060001c60005414610f6057600080fd5b600080553415610f6f57600080fd5b7f77b154499c7ca86f06a3044bbb50372490dd947a58b28760ad8e925baff6335681604051610d739190611684565b604051610fb2906008908390602001611774565b6040516020818303038152906040528051906020012060001c60005414610fd857600080fd5b60008055600a610fed601460808401356117f7565b610ff791906117f7565b43101561100357600080fd5b341561100e57600080fd5b7f8f4bf9cf37e03326ba5edcaaf032fed3ba63d0502c18d7b0ace88df4066bff2681604051610ec091906116c9565b8060200151608001511561123a5760208101515115611157576040805160208101909152600081526020828101516040908101516001600160a01b0316808452600260015581519283015201604051602081830303815290604052600290805190602001906110ad9291906112b8565b506040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a08089019788528b51516001600160a01b039081168a528c880180515115159097528651880151811690955285518a0151909416909152835190910151905290510151909152915190916111349160029184910161179c565b60408051601f198184030181529190528051602090910120600055506112359050565b6040805160208101909152600081526020828101516040908101516001600160a01b0316808452600560015581519283015201604051602081830303815290604052600290805190602001906111ae9291906112b8565b506040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a08089019788528b51516001600160a01b039081168a528c880180515115159097528651880151811690955285518a01519094169091528351909101519052905101519091529151909161051a9160029184910161179c565b61063f565b604080518082019091526000808252602082015261034e81600080805560018190556112689060029061133c565b33ff5b60408051606081018252600091810191825290819081526040805160c08101825260008082526020828101829052928201819052606082018190526080820181905260a082015291015290565b8280546112c49061181b565b90600052602060002090601f0160209004810192826112e6576000855561132c565b82601f106112ff57805160ff191683800117855561132c565b8280016001018555821561132c579182015b8281111561132c578251825591602001919060010190611311565b50611338929150611374565b5090565b5080546113489061181b565b6000825580601f1061135a575061063f565b601f01602090049060005260206000209081019061063f91905b5b808211156113385760008155600101611375565b8035801515811461139957600080fd5b919050565b600060e082840312156113af578081fd5b50919050565b600060c082840312156113af578081fd5b6000602082840312156113d7578081fd5b81356113e281611850565b9392505050565b6000602082840312156113fa578081fd5b6113e282611389565b600061010082840312156113af578081fd5b600060e08284031215611426578081fd5b6113e2838361139e565b600060c08284031215611441578081fd5b6113e283836113b5565b60006020828403121561145c578081fd5b6040516020810181811067ffffffffffffffff8211171561148b57634e487b7160e01b83526041600452602483fd5b604052825161149981611850565b81529392505050565b60006125c082840312156113af578081fd5b806000805b60968110156114e957823560ff81168082146114d3578384fd5b86525060209485019492909201916001016114b9565b5050505050565b80356114fb81611850565b6001600160a01b03908116835260208201359061151782611850565b8082166020850152604083013560408501526060830135915061153982611850565b166060830152608090810135910152565b80358252602081013561155c81611850565b6001600160a01b03166020929092019190915250565b803561157d81611850565b6001600160a01b03908116835260208201359061159982611850565b90811660208401526040820135906115b082611850565b16604083015260608181013590830152608090810135910152565b80356115d681611850565b6001600160a01b0381811684526115ef60208401611389565b151560208501526040830135915061160682611850565b908116604084015260608201359061161d82611850565b1660608301526080818101359083015260a090810135910152565b610100810161164782846115cb565b61165760c0830160c0850161154a565b92915050565b60e0810161166b82846115cb565b61167760c08401611389565b151560c083015292915050565b60c0810161169282846114f0565b61169e60a08401611389565b151560a083015292915050565b60e081016116b98284611572565b61165760a0830160a0850161154a565b60c081016116928284611572565b813581526125c081016116f060208084019085016114b4565b6112e0838101359083015261130061170c8184018286016114b4565b5092915050565b82815260c081016113e260208301846114f0565b91825280516001600160a01b03908116602080850191909152820151811660408085019190915282015160608085019190915282015116608080840191909152015160a082015260c00190565b82815260c081016113e26020830184611572565b82815260e081016113e260208301846115cb565b600060e08201905083825260018060a01b0380845116602084015260208401511515604084015280604085015116606084015280606085015116608084015250608083015160a083015260a083015160c08301529392505050565b6000821982111561181657634e487b7160e01b81526011600452602481fd5b500190565b60028104600182168061182f57607f821691505b602082108114156113af57634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461063f57600080fdfea2646970667358221220d9bdbee10f4269e7174e381dbe646d87b8d3e35f8e599eeaf9bf042be02a625564736f6c63430008020033`,
  deployMode: `DM_constructor`,
  views: {
    NFT: {
      owner: `NFT_owner`
      }
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

