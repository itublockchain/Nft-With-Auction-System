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

export async function Bidder(ctc, interact) {
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 150));
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc5, ctc2, ctc2, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc5, ctc2, ctc2, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc0, ctc2, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc0, ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc2, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc2, ctc0]);
  
  
  const v21 = await ctc.creationTime();
  
  const txn1 = await (ctc.recv(1, 3, [ctc0, ctc0, ctc1], false, false));
  const [v26, v27, v28] = txn1.data;
  const v30 = txn1.time;
  const v25 = txn1.from;
  ;
  let v31 = false;
  let v32 = v25;
  let v33 = v25;
  let v34 = stdlib.checkedBigNumberify('./index.rsh:39:61:decimal', stdlib.UInt_max, 0);
  let v150 = v30;
  
  while ((() => {
    
    return true;})()) {
    if (v31) {
      const v64 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:57:20:application', stdlib.UInt_max, 63));
      const v67 = stdlib.addressEq(v64, v32);
      const v69 = v67 ? false : true;
      const v73 = stdlib.addressEq(v64, v33);
      const v75 = v73 ? false : true;
      const v78 = v67 ? false : v75;
      let v80;
      if (v78) {
        const v79 = stdlib.protect(ctc0, await interact.getBid(v28), {
          at: './index.rsh:58:93:application',
          fs: ['at ./index.rsh:57:20:application call to [unknown function] (defined at: ./index.rsh:57:24:function exp)'],
          msg: 'getBid',
          who: 'Bidder'
          });
        v80 = v79;
        }
      else {
        v80 = v34;
        }
      const v94 = v78 ? v64 : v32;
      
      const v95 = stdlib.gt(v80, v34);
      const v97 = stdlib.addressEq(v33, v64);
      const v99 = v97 ? false : true;
      const v102 = v95 ? v99 : false;
      const v109 = v102 ? v69 : false;
      
      const txn2 = await (ctc.sendrecv(4, 2, stdlib.checkedBigNumberify('./index.rsh:62:16:dot', stdlib.UInt_max, 6), [ctc2, ctc0, ctc5, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2], [v25, v27, v31, v32, v33, v34, v150, v80, v94], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc2], v109, false, v27, (async (txn2) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:62:16:dot', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:62:16:dot', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
        const [v111, v112] = txn2.data;
        const v114 = txn2.time;
        const v110 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:81:17:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v27, v33, v111, v112, v114]);
        sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:81:17:after expr stmt semicolon', stdlib.UInt_max, 4), v25, v27, v33, v111, v112]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:81:17:after expr stmt semicolon', stdlib.UInt_max, 1), v33]];
        sim_r.isHalt = false;
        
        return sim_r;
        })));
      if (txn2.didTimeout) {
        const v128 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:63:15:application', stdlib.UInt_max, 127));
        stdlib.protect(ctc3, await interact.seeOutcome(v28, v33), {
          at: './index.rsh:64:32:application',
          fs: ['at ./index.rsh:63:15:application call to [unknown function] (defined at: ./index.rsh:63:38:function exp)'],
          msg: 'seeOutcome',
          who: 'Bidder'
          });
        
        const v130 = stdlib.addressEq(v32, v128);
        
        const txn3 = await (ctc.sendrecv(5, 0, stdlib.checkedBigNumberify('./index.rsh:66:18:dot', stdlib.UInt_max, 6), [ctc2, ctc0, ctc5, ctc2, ctc2, ctc0, ctc0], [v25, v27, v31, v32, v33, v34, v150], [v34, []], [], v130, false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:66:62:decimal', stdlib.UInt_max, 20), v27), (async (txn3) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:66:18:dot', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:66:18:dot', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
          const [] = txn3.data;
          const v134 = txn3.time;
          const v131 = txn3.from;
          
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
          const cv34 = stdlib.checkedBigNumberify('./index.rsh:77:64:decimal', stdlib.UInt_max, 0);
          const cv150 = v134;
          
          (() => {
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v34 = cv34;
            const v150 = cv150;
            
            if ((() => {
              
              return true;})()) {
              if (v31) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
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
            at: './index.rsh:68:37:application',
            fs: ['at ./index.rsh:67:17:application call to [unknown function] (defined at: ./index.rsh:67:40:function exp)'],
            msg: 'informTimeout',
            who: 'Bidder'
            });
          
          
          const txn4 = await (ctc.sendrecv(6, 0, stdlib.checkedBigNumberify('./index.rsh:71:20:dot', stdlib.UInt_max, 6), [ctc2, ctc0, ctc5, ctc2, ctc2, ctc0, ctc0], [v25, v27, v31, v32, v33, v34, v150], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:71:20:dot', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:71:20:dot', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
            const [] = txn4.data;
            const v147 = txn4.time;
            const v145 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv31 = false;
            const cv32 = v25;
            const cv33 = v25;
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:72:63:decimal', stdlib.UInt_max, 0);
            const cv150 = v147;
            
            (() => {
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v34 = cv34;
              const v150 = cv150;
              
              if ((() => {
                
                return true;})()) {
                if (v31) {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
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
          const v147 = txn4.time;
          const v145 = txn4.from;
          ;
          const cv31 = false;
          const cv32 = v25;
          const cv33 = v25;
          const cv34 = stdlib.checkedBigNumberify('./index.rsh:72:63:decimal', stdlib.UInt_max, 0);
          const cv150 = v147;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v150 = cv150;
          
          continue;
          }
        else {
          const [] = txn3.data;
          const v134 = txn3.time;
          const v131 = txn3.from;
          ;
          ;
          const cv31 = false;
          const cv32 = v32;
          const cv33 = v32;
          const cv34 = stdlib.checkedBigNumberify('./index.rsh:77:64:decimal', stdlib.UInt_max, 0);
          const cv150 = v134;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v150 = cv150;
          
          continue;}
        }
      else {
        const [v111, v112] = txn2.data;
        const v114 = txn2.time;
        const v110 = txn2.from;
        ;
        stdlib.protect(ctc3, await interact.showBid(v28, v111, v32), {
          at: './index.rsh:84:27:application',
          fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:36:function exp)'],
          msg: 'showBid',
          who: 'Bidder'
          });
        
        
        const txn3 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 5), [ctc2, ctc0, ctc2, ctc0, ctc2, ctc0], [v25, v27, v33, v111, v112, v114], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 4), v25, v27, v33, v111, v112, v114]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 4), v25, v27, v33, v111, v112]);
          const [] = txn3.data;
          const v123 = txn3.time;
          const v121 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv31 = true;
          const cv32 = v112;
          const cv33 = v33;
          const cv34 = v111;
          const cv150 = v123;
          
          (() => {
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v34 = cv34;
            const v150 = cv150;
            
            if ((() => {
              
              return true;})()) {
              if (v31) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
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
        const v123 = txn3.time;
        const v121 = txn3.from;
        ;
        const cv31 = true;
        const cv32 = v112;
        const cv33 = v33;
        const cv34 = v111;
        const cv150 = v123;
        
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v34 = cv34;
        v150 = cv150;
        
        continue;
        }
      }
    else {
      const v49 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:46:15:application', stdlib.UInt_max, 48));
      const v51 = stdlib.addressEq(v49, v33);
      let v53;
      if (v51) {
        const v52 = stdlib.protect(ctc5, await interact.isAuctionOn(v28), {
          at: './index.rsh:47:81:application',
          fs: ['at ./index.rsh:46:15:application call to [unknown function] (defined at: ./index.rsh:46:38:function exp)'],
          msg: 'isAuctionOn',
          who: 'Bidder'
          });
        v53 = v52;
        }
      else {
        v53 = true;
        }
      
      const v54 = stdlib.addressEq(v33, v49);
      
      const txn2 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:50:19:dot', stdlib.UInt_max, 6), [ctc2, ctc0, ctc5, ctc2, ctc2, ctc0, ctc0, ctc5], [v25, v27, v31, v32, v33, v34, v150, v53], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc5], v54, false, false, (async (txn2) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:50:19:dot', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:50:19:dot', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
        const [v57] = txn2.data;
        const v59 = txn2.time;
        const v56 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        if (v57) {
          sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 8), v25, v27, v32, v33, v34, v59]);
          sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 8), v25, v27, v32, v33, v34]);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 4), v33]];
          sim_r.isHalt = false;
          }
        else {
          const cv31 = v31;
          const cv32 = v32;
          const cv33 = v33;
          const cv34 = v34;
          const cv150 = v59;
          
          (() => {
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v34 = cv34;
            const v150 = cv150;
            
            if ((() => {
              
              return true;})()) {
              if (v31) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
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
      const [v57] = txn2.data;
      const v59 = txn2.time;
      const v56 = txn2.from;
      ;
      if (v57) {
        const v64 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:57:20:application', stdlib.UInt_max, 63));
        const v67 = stdlib.addressEq(v64, v32);
        const v69 = v67 ? false : true;
        const v73 = stdlib.addressEq(v64, v33);
        const v75 = v73 ? false : true;
        const v78 = v67 ? false : v75;
        let v80;
        if (v78) {
          const v79 = stdlib.protect(ctc0, await interact.getBid(v28), {
            at: './index.rsh:58:93:application',
            fs: ['at ./index.rsh:57:20:application call to [unknown function] (defined at: ./index.rsh:57:24:function exp)'],
            msg: 'getBid',
            who: 'Bidder'
            });
          v80 = v79;
          }
        else {
          v80 = v34;
          }
        const v94 = v78 ? v64 : v32;
        
        const v95 = stdlib.gt(v80, v34);
        const v97 = stdlib.addressEq(v33, v64);
        const v99 = v97 ? false : true;
        const v102 = v95 ? v99 : false;
        const v109 = v102 ? v69 : false;
        
        const txn3 = await (ctc.sendrecv(9, 2, stdlib.checkedBigNumberify('./index.rsh:62:16:dot', stdlib.UInt_max, 5), [ctc2, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2], [v25, v27, v32, v33, v34, v59, v80, v94], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc2], v109, false, v27, (async (txn3) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:62:16:dot', stdlib.UInt_max, 8), v25, v27, v32, v33, v34, v59]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:62:16:dot', stdlib.UInt_max, 8), v25, v27, v32, v33, v34]);
          const [v111, v112] = txn3.data;
          const v114 = txn3.time;
          const v110 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          sim_r.nextSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:81:17:after expr stmt semicolon', stdlib.UInt_max, 9), v25, v27, v33, v111, v112, v114]);
          sim_r.nextSt_noTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:81:17:after expr stmt semicolon', stdlib.UInt_max, 9), v25, v27, v33, v111, v112]);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:81:17:after expr stmt semicolon', stdlib.UInt_max, 3), v33]];
          sim_r.isHalt = false;
          
          return sim_r;
          })));
        if (txn3.didTimeout) {
          const v128 = ctc.selfAddress('Bidder', true, stdlib.checkedBigNumberify('./index.rsh:63:15:application', stdlib.UInt_max, 127));
          stdlib.protect(ctc3, await interact.seeOutcome(v28, v33), {
            at: './index.rsh:64:32:application',
            fs: ['at ./index.rsh:63:15:application call to [unknown function] (defined at: ./index.rsh:63:38:function exp)'],
            msg: 'seeOutcome',
            who: 'Bidder'
            });
          
          const v130 = stdlib.addressEq(v32, v128);
          
          const txn4 = await (ctc.sendrecv(10, 0, stdlib.checkedBigNumberify('./index.rsh:66:18:dot', stdlib.UInt_max, 5), [ctc2, ctc0, ctc2, ctc2, ctc0, ctc0], [v25, v27, v32, v33, v34, v59], [v34, []], [], v130, false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:66:62:decimal', stdlib.UInt_max, 20), v27), (async (txn4) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:66:18:dot', stdlib.UInt_max, 8), v25, v27, v32, v33, v34, v59]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:66:18:dot', stdlib.UInt_max, 8), v25, v27, v32, v33, v34]);
            const [] = txn4.data;
            const v134 = txn4.time;
            const v131 = txn4.from;
            
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
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:77:64:decimal', stdlib.UInt_max, 0);
            const cv150 = v134;
            
            (() => {
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v34 = cv34;
              const v150 = cv150;
              
              if ((() => {
                
                return true;})()) {
                if (v31) {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
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
              at: './index.rsh:68:37:application',
              fs: ['at ./index.rsh:67:17:application call to [unknown function] (defined at: ./index.rsh:67:40:function exp)'],
              msg: 'informTimeout',
              who: 'Bidder'
              });
            
            
            const txn5 = await (ctc.sendrecv(11, 0, stdlib.checkedBigNumberify('./index.rsh:71:20:dot', stdlib.UInt_max, 5), [ctc2, ctc0, ctc2, ctc2, ctc0, ctc0], [v25, v27, v32, v33, v34, v59], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn5) => {
              const sim_r = { txns: [] };
              sim_r.prevSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:71:20:dot', stdlib.UInt_max, 8), v25, v27, v32, v33, v34, v59]);
              sim_r.prevSt_noPrevTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:71:20:dot', stdlib.UInt_max, 8), v25, v27, v32, v33, v34]);
              const [] = txn5.data;
              const v147 = txn5.time;
              const v145 = txn5.from;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const cv31 = false;
              const cv32 = v25;
              const cv33 = v25;
              const cv34 = stdlib.checkedBigNumberify('./index.rsh:72:63:decimal', stdlib.UInt_max, 0);
              const cv150 = v147;
              
              (() => {
                const v31 = cv31;
                const v32 = cv32;
                const v33 = cv33;
                const v34 = cv34;
                const v150 = cv150;
                
                if ((() => {
                  
                  return true;})()) {
                  if (v31) {
                    sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                    sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                    sim_r.isHalt = false;
                    }
                  else {
                    sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                    sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                    sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
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
            const v147 = txn5.time;
            const v145 = txn5.from;
            ;
            const cv31 = false;
            const cv32 = v25;
            const cv33 = v25;
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:72:63:decimal', stdlib.UInt_max, 0);
            const cv150 = v147;
            
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v34 = cv34;
            v150 = cv150;
            
            continue;
            }
          else {
            const [] = txn4.data;
            const v134 = txn4.time;
            const v131 = txn4.from;
            ;
            ;
            const cv31 = false;
            const cv32 = v32;
            const cv33 = v32;
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:77:64:decimal', stdlib.UInt_max, 0);
            const cv150 = v134;
            
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v34 = cv34;
            v150 = cv150;
            
            continue;}
          }
        else {
          const [v111, v112] = txn3.data;
          const v114 = txn3.time;
          const v110 = txn3.from;
          ;
          stdlib.protect(ctc3, await interact.showBid(v28, v111, v32), {
            at: './index.rsh:84:27:application',
            fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:36:function exp)'],
            msg: 'showBid',
            who: 'Bidder'
            });
          
          
          const txn4 = await (ctc.sendrecv(12, 0, stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 5), [ctc2, ctc0, ctc2, ctc0, ctc2, ctc0], [v25, v27, v33, v111, v112, v114], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 9), v25, v27, v33, v111, v112, v114]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 9), v25, v27, v33, v111, v112]);
            const [] = txn4.data;
            const v123 = txn4.time;
            const v121 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv31 = true;
            const cv32 = v112;
            const cv33 = v33;
            const cv34 = v111;
            const cv150 = v123;
            
            (() => {
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v34 = cv34;
              const v150 = cv150;
              
              if ((() => {
                
                return true;})()) {
                if (v31) {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
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
          const v123 = txn4.time;
          const v121 = txn4.from;
          ;
          const cv31 = true;
          const cv32 = v112;
          const cv33 = v33;
          const cv34 = v111;
          const cv150 = v123;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v150 = cv150;
          
          continue;
          }
        }
      else {
        const cv31 = v31;
        const cv32 = v32;
        const cv33 = v33;
        const cv34 = v34;
        const cv150 = v59;
        
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v34 = cv34;
        v150 = cv150;
        
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
  const ctc6 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc5, ctc2, ctc2, ctc0, ctc0]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc5, ctc2, ctc2, ctc0]);
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc0, ctc2, ctc0]);
  const ctc10 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc0, ctc2]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc2, ctc0, ctc0]);
  const ctc12 = stdlib.T_Tuple([ctc0, ctc2, ctc0, ctc2, ctc2, ctc0]);
  const ctc13 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc14 = stdlib.T_Tuple([ctc0]);
  
  
  const v21 = await ctc.creationTime();
  const v18 = stdlib.protect(ctc0, interact.deadline, 'for Creator\'s interact field deadline');
  const v19 = stdlib.protect(ctc0, interact.getId, 'for Creator\'s interact field getId');
  const v20 = stdlib.protect(ctc1, interact.nftViewAddress, 'for Creator\'s interact field nftViewAddress');
  
  
  
  const txn1 = await (ctc.sendrecv(1, 3, stdlib.checkedBigNumberify('./index.rsh:37:15:dot', stdlib.UInt_max, 0), [ctc0, ctc0, ctc0, ctc1], [v21, v19, v18, v20], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc0, ctc0, ctc1], true, true, false, (async (txn1) => {
    const sim_r = { txns: [] };
    sim_r.prevSt = stdlib.digest(ctc13, [stdlib.checkedBigNumberify('./index.rsh:37:15:dot', stdlib.UInt_max, 0), v21]);
    sim_r.prevSt_noPrevTime = stdlib.digest(ctc14, [stdlib.checkedBigNumberify('./index.rsh:37:15:dot', stdlib.UInt_max, 0)]);
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
    const v34 = stdlib.checkedBigNumberify('./index.rsh:39:61:decimal', stdlib.UInt_max, 0);
    const v150 = v30;
    
    if ((() => {
      
      return true;})()) {
      if (v31) {
        sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
        sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
        sim_r.isHalt = false;
        }
      else {
        sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
        sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
        sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
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
  let v34 = stdlib.checkedBigNumberify('./index.rsh:39:61:decimal', stdlib.UInt_max, 0);
  let v150 = v30;
  
  while ((() => {
    
    return true;})()) {
    if (v31) {
      const txn2 = await (ctc.recv(4, 2, [ctc0, ctc2], false, v27));
      if (txn2.didTimeout) {
        stdlib.protect(ctc3, await interact.seeOutcome(v28, v33), {
          at: './index.rsh:64:32:application',
          fs: ['at ./index.rsh:63:15:application call to [unknown function] (defined at: ./index.rsh:63:38:function exp)'],
          msg: 'seeOutcome',
          who: 'Creator'
          });
        
        const txn3 = await (ctc.recv(5, 0, [], false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:66:62:decimal', stdlib.UInt_max, 20), v27)));
        if (txn3.didTimeout) {
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:68:37:application',
            fs: ['at ./index.rsh:67:17:application call to [unknown function] (defined at: ./index.rsh:67:40:function exp)'],
            msg: 'informTimeout',
            who: 'Creator'
            });
          
          const txn4 = await (ctc.recv(6, 0, [], false, false));
          const [] = txn4.data;
          const v147 = txn4.time;
          const v145 = txn4.from;
          ;
          const cv31 = false;
          const cv32 = v25;
          const cv33 = v25;
          const cv34 = stdlib.checkedBigNumberify('./index.rsh:72:63:decimal', stdlib.UInt_max, 0);
          const cv150 = v147;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v150 = cv150;
          
          continue;
          }
        else {
          const [] = txn3.data;
          const v134 = txn3.time;
          const v131 = txn3.from;
          ;
          ;
          const cv31 = false;
          const cv32 = v32;
          const cv33 = v32;
          const cv34 = stdlib.checkedBigNumberify('./index.rsh:77:64:decimal', stdlib.UInt_max, 0);
          const cv150 = v134;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v150 = cv150;
          
          continue;}
        }
      else {
        const [v111, v112] = txn2.data;
        const v114 = txn2.time;
        const v110 = txn2.from;
        ;
        stdlib.protect(ctc3, await interact.showBid(v28, v111, v32), {
          at: './index.rsh:84:27:application',
          fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:36:function exp)'],
          msg: 'showBid',
          who: 'Creator'
          });
        
        
        const txn3 = await (ctc.sendrecv(7, 0, stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 5), [ctc2, ctc0, ctc2, ctc0, ctc2, ctc0], [v25, v27, v33, v111, v112, v114], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn3) => {
          const sim_r = { txns: [] };
          sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 4), v25, v27, v33, v111, v112, v114]);
          sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 4), v25, v27, v33, v111, v112]);
          const [] = txn3.data;
          const v123 = txn3.time;
          const v121 = txn3.from;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const cv31 = true;
          const cv32 = v112;
          const cv33 = v33;
          const cv34 = v111;
          const cv150 = v123;
          
          (() => {
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v34 = cv34;
            const v150 = cv150;
            
            if ((() => {
              
              return true;})()) {
              if (v31) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
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
        const v123 = txn3.time;
        const v121 = txn3.from;
        ;
        const cv31 = true;
        const cv32 = v112;
        const cv33 = v33;
        const cv34 = v111;
        const cv150 = v123;
        
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v34 = cv34;
        v150 = cv150;
        
        continue;
        }
      }
    else {
      const v45 = stdlib.addressEq(v25, v33);
      let v47;
      if (v45) {
        const v46 = stdlib.protect(ctc5, await interact.isAuctionOn(v28), {
          at: './index.rsh:47:81:application',
          fs: ['at ./index.rsh:46:15:application call to [unknown function] (defined at: ./index.rsh:46:38:function exp)'],
          msg: 'isAuctionOn',
          who: 'Creator'
          });
        v47 = v46;
        }
      else {
        v47 = true;
        }
      
      const v55 = stdlib.addressEq(v33, v25);
      
      const txn2 = await (ctc.sendrecv(8, 1, stdlib.checkedBigNumberify('./index.rsh:50:19:dot', stdlib.UInt_max, 6), [ctc2, ctc0, ctc5, ctc2, ctc2, ctc0, ctc0, ctc5], [v25, v27, v31, v32, v33, v34, v150, v47], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [ctc5], v55, false, false, (async (txn2) => {
        const sim_r = { txns: [] };
        sim_r.prevSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:50:19:dot', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
        sim_r.prevSt_noPrevTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:50:19:dot', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
        const [v57] = txn2.data;
        const v59 = txn2.time;
        const v56 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        if (v57) {
          sim_r.nextSt = stdlib.digest(ctc11, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 8), v25, v27, v32, v33, v34, v59]);
          sim_r.nextSt_noTime = stdlib.digest(ctc12, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 8), v25, v27, v32, v33, v34]);
          sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 4), v33]];
          sim_r.isHalt = false;
          }
        else {
          const cv31 = v31;
          const cv32 = v32;
          const cv33 = v33;
          const cv34 = v34;
          const cv150 = v59;
          
          (() => {
            const v31 = cv31;
            const v32 = cv32;
            const v33 = cv33;
            const v34 = cv34;
            const v150 = cv150;
            
            if ((() => {
              
              return true;})()) {
              if (v31) {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                sim_r.isHalt = false;
                }
              else {
                sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
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
      const [v57] = txn2.data;
      const v59 = txn2.time;
      const v56 = txn2.from;
      ;
      if (v57) {
        const txn3 = await (ctc.recv(9, 2, [ctc0, ctc2], false, v27));
        if (txn3.didTimeout) {
          stdlib.protect(ctc3, await interact.seeOutcome(v28, v33), {
            at: './index.rsh:64:32:application',
            fs: ['at ./index.rsh:63:15:application call to [unknown function] (defined at: ./index.rsh:63:38:function exp)'],
            msg: 'seeOutcome',
            who: 'Creator'
            });
          
          const txn4 = await (ctc.recv(10, 0, [], false, stdlib.add(stdlib.checkedBigNumberify('./index.rsh:66:62:decimal', stdlib.UInt_max, 20), v27)));
          if (txn4.didTimeout) {
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:68:37:application',
              fs: ['at ./index.rsh:67:17:application call to [unknown function] (defined at: ./index.rsh:67:40:function exp)'],
              msg: 'informTimeout',
              who: 'Creator'
              });
            
            const txn5 = await (ctc.recv(11, 0, [], false, false));
            const [] = txn5.data;
            const v147 = txn5.time;
            const v145 = txn5.from;
            ;
            const cv31 = false;
            const cv32 = v25;
            const cv33 = v25;
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:72:63:decimal', stdlib.UInt_max, 0);
            const cv150 = v147;
            
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v34 = cv34;
            v150 = cv150;
            
            continue;
            }
          else {
            const [] = txn4.data;
            const v134 = txn4.time;
            const v131 = txn4.from;
            ;
            ;
            const cv31 = false;
            const cv32 = v32;
            const cv33 = v32;
            const cv34 = stdlib.checkedBigNumberify('./index.rsh:77:64:decimal', stdlib.UInt_max, 0);
            const cv150 = v134;
            
            v31 = cv31;
            v32 = cv32;
            v33 = cv33;
            v34 = cv34;
            v150 = cv150;
            
            continue;}
          }
        else {
          const [v111, v112] = txn3.data;
          const v114 = txn3.time;
          const v110 = txn3.from;
          ;
          stdlib.protect(ctc3, await interact.showBid(v28, v111, v32), {
            at: './index.rsh:84:27:application',
            fs: ['at ./index.rsh:83:13:application call to [unknown function] (defined at: ./index.rsh:83:36:function exp)'],
            msg: 'showBid',
            who: 'Creator'
            });
          
          
          const txn4 = await (ctc.sendrecv(12, 0, stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 5), [ctc2, ctc0, ctc2, ctc0, ctc2, ctc0], [v25, v27, v33, v111, v112, v114], [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []], [], true, false, false, (async (txn4) => {
            const sim_r = { txns: [] };
            sim_r.prevSt = stdlib.digest(ctc9, [stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 9), v25, v27, v33, v111, v112, v114]);
            sim_r.prevSt_noPrevTime = stdlib.digest(ctc10, [stdlib.checkedBigNumberify('./index.rsh:86:17:dot', stdlib.UInt_max, 9), v25, v27, v33, v111, v112]);
            const [] = txn4.data;
            const v123 = txn4.time;
            const v121 = txn4.from;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const cv31 = true;
            const cv32 = v112;
            const cv33 = v33;
            const cv34 = v111;
            const cv150 = v123;
            
            (() => {
              const v31 = cv31;
              const v32 = cv32;
              const v33 = cv33;
              const v34 = cv34;
              const v150 = cv150;
              
              if ((() => {
                
                return true;})()) {
                if (v31) {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:56:17:after expr stmt semicolon', stdlib.UInt_max, 2), v33]];
                  sim_r.isHalt = false;
                  }
                else {
                  sim_r.nextSt = stdlib.digest(ctc6, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34, v150]);
                  sim_r.nextSt_noTime = stdlib.digest(ctc7, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 2), v25, v27, v31, v32, v33, v34]);
                  sim_r.view = [ctc4, [stdlib.checkedBigNumberify('./index.rsh:44:19:after expr stmt semicolon', stdlib.UInt_max, 5), v33]];
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
          const v123 = txn4.time;
          const v121 = txn4.from;
          ;
          const cv31 = true;
          const cv32 = v112;
          const cv33 = v33;
          const cv34 = v111;
          const cv150 = v123;
          
          v31 = cv31;
          v32 = cv32;
          v33 = cv33;
          v34 = cv34;
          v150 = cv150;
          
          continue;
          }
        }
      else {
        const cv31 = v31;
        const cv32 = v32;
        const cv33 = v33;
        const cv34 = v34;
        const cv150 = v59;
        
        v31 = cv31;
        v32 = cv32;
        v33 = cv33;
        v34 = cv34;
        v150 = cv150;
        
        continue;}
      }}
  return;
  
  };

const _ALGO = {
  appApproval: `#pragma version 3
// Check that we're an App
txn TypeEnum
int appl
==
assert
txn RekeyTo
global ZeroAddress
==
assert
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
byte base64(bA==)
app_global_get
gtxna 0 ApplicationArgs 5
btoi
==
assert
// Don't check anyone else, because Handler does
// Update state
byte base64(cw==)
gtxna 0 ApplicationArgs 1
app_global_put
byte base64(bA==)
global Round
app_global_put
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
  stepargs: [null, {
    count: 8,
    size: 287
    }, null, null, {
    count: 8,
    size: 274
    }, {
    count: 8,
    size: 234
    }, {
    count: 8,
    size: 234
    }, {
    count: 8,
    size: 233
    }, {
    count: 8,
    size: 235
    }, {
    count: 8,
    size: 273
    }, {
    count: 8,
    size: 233
    }, {
    count: 8,
    size: 233
    }, {
    count: 8,
    size: 233
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
gtxna 0 ApplicationArgs 6
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
dup
substring 16 166
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
int 8
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
// "./index.rsh:37:15:dot"
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
load 254
itob
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
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 41
btoi
store 253
dup
substring 41 73
store 252
dup
substring 73 105
store 251
dup
substring 105 113
btoi
store 250
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 8
btoi
store 249
dup
substring 8 40
store 248
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
int 8
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
itob
concat
load 253
itob // bool
substring 7 8
concat
load 252
concat
load 251
concat
load 250
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
// "./index.rsh:62:16:dot"
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
load 251
concat
load 1
==
assert
// compute state in HM_Set 4
int 4
itob
load 255
concat
load 254
itob
concat
load 251
concat
load 249
itob
concat
load 248
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
load 254
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
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 41
btoi
store 253
dup
substring 41 73
store 252
dup
substring 73 105
store 251
dup
substring 105 113
btoi
store 250
pop
gtxna 0 ApplicationArgs 7
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
int 8
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
itob
concat
load 253
itob // bool
substring 7 8
concat
load 252
concat
load 251
concat
load 250
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
// "./index.rsh:66:18:dot"
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
load 250
==
assert
// We don't care who the sender is... this means that you can get other people to pay for you if you want.
gtxn 4 TypeEnum
int pay
==
assert
gtxn 4 Receiver
load 251
==
assert
gtxn 4 Amount
load 250
==
assert
gtxn 4 Sender
byte "{{ContractAddr}}"
==
assert
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
itob
concat
int 0
itob // bool
substring 7 8
concat
load 252
concat
load 252
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
load 254
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
load 254
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
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 41
btoi
store 253
dup
substring 41 73
store 252
dup
substring 73 105
store 251
dup
substring 105 113
btoi
store 250
pop
gtxna 0 ApplicationArgs 7
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
int 8
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
itob
concat
load 253
itob // bool
substring 7 8
concat
load 252
concat
load 251
concat
load 250
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
// "./index.rsh:71:20:dot"
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
load 254
itob
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
load 254
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
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
pop
gtxna 0 ApplicationArgs 7
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
int 8
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
itob
concat
load 253
concat
load 252
itob
concat
load 251
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
// "./index.rsh:86:17:dot"
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
load 254
itob
concat
int 1
itob // bool
substring 7 8
concat
load 251
concat
load 253
concat
load 252
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
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 41
btoi
store 253
dup
substring 41 73
store 252
dup
substring 73 105
store 251
dup
substring 105 113
btoi
store 250
pop
gtxna 0 ApplicationArgs 7
dup
substring 0 1
btoi
store 249
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
int 8
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
itob
concat
load 253
itob // bool
substring 7 8
concat
load 252
concat
load 251
concat
load 250
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
// "./index.rsh:50:19:dot"
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
load 249
bz l0
// check view bs
int 4
itob
load 251
concat
load 1
==
assert
// compute state in HM_Set 8
int 8
itob
load 255
concat
load 254
itob
concat
load 252
concat
load 251
concat
load 250
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
b done
l0:
load 253
bz l1
// check view bs
int 2
itob
load 251
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
itob
concat
load 253
itob // bool
substring 7 8
concat
load 252
concat
load 251
concat
load 250
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
b done
l1:
// check view bs
int 5
itob
load 251
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
itob
concat
load 253
itob // bool
substring 7 8
concat
load 252
concat
load 251
concat
load 250
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
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 112
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
int 8
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
itob
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
// "./index.rsh:62:16:dot"
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
load 252
concat
load 1
==
assert
// compute state in HM_Set 9
int 9
itob
load 255
concat
load 254
itob
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
load 254
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
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 112
btoi
store 251
pop
gtxna 0 ApplicationArgs 7
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
int 8
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
itob
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
// "./index.rsh:66:18:dot"
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
load 254
itob
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
load 254
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
load 254
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
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 104
store 252
dup
substring 104 112
btoi
store 251
pop
gtxna 0 ApplicationArgs 7
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
int 8
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
itob
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
// "./index.rsh:71:20:dot"
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
load 254
itob
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
load 254
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
gtxna 0 ApplicationArgs 6
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 112
store 251
pop
gtxna 0 ApplicationArgs 7
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
int 8
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
itob
concat
load 253
concat
load 252
itob
concat
load 251
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
// "./index.rsh:86:17:dot"
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
load 254
itob
concat
int 1
itob // bool
substring 7 8
concat
load 251
concat
load 253
concat
load 252
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
done:
int 1
return
`],
  unsupported: false,
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
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v59",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v59",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v112",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v114",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v150",
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
                "name": "v111",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v112",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v150",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v150",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v112",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v114",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v150",
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
                "name": "v57",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v59",
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
                "name": "v111",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v112",
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
                "internalType": "uint256",
                "name": "v26",
                "type": "uint256"
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v59",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v59",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v112",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v114",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v150",
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
                "name": "v111",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v112",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v150",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v150",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v33",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v112",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v114",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v150",
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
                "name": "v57",
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
                "internalType": "uint256",
                "name": "v27",
                "type": "uint256"
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
                "name": "v59",
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
                "name": "v111",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v112",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051602080820183524382526000600181905583519182018190529192016040516020818303038152906040526002908051906020019062000072929190620000b4565b50506040805160208082018352600080835293518252825180820185905291518284015282518083038401815260609092019092528051910120905562000197565b828054620000c2906200015a565b90600052602060002090601f016020900481019282620000e6576000855562000131565b82601f106200010157805160ff191683800117855562000131565b8280016001018555821562000131579182015b828111156200013157825182559160200191906001019062000114565b506200013f92915062000143565b5090565b5b808211156200013f576000815560010162000144565b6002810460018216806200016f57607f821691505b602082108114156200019157634e487b7160e01b600052602260045260246000fd5b50919050565b61189880620001a76000396000f3fe6080604052600436106100a05760003560e01c80635ee00679116100645780635ee006791461012b57806385c1434d1461013e578063a38c5a4f14610151578063b936be8714610164578063bdd75a0214610177578063c7417a151461018a576100a7565b806310c0ee09146100ac578063158d7d95146100c15780631c134442146100d45780632c5ab172146100e75780635cf275dd146100fa576100a7565b366100a757005b600080fd5b6100bf6100ba3660046113ec565b61019d565b005b6100bf6100cf366004611408565b610342565b6100bf6100e23660046113ec565b61046a565b6100bf6100f5366004611408565b610624565b34801561010657600080fd5b5061010f610737565b6040516001600160a01b03909116815260200160405180910390f35b6100bf6101393660046113da565b610858565b6100bf61014c3660046113ec565b6109dd565b6100bf61015f366004611408565b610a7f565b6100bf61017236600461147a565b610c04565b6100bf6101853660046113ec565b610cd7565b6100bf610198366004611408565b610fcc565b6040516101b1906008908390602001611765565b6040516020818303038152906040528051906020012060001c600054146101d757600080fd5b600080556101ed602082013560a08301356117f4565b43106101f857600080fd5b341561020357600080fd5b7fc996be77cce2c644cd76e387a9772aa57357e95f809aaed65b9027a65dfc783c816040516102329190611666565b60405180910390a1604080516020810190915260008152610259608083016060840161139d565b6001600160a01b03168082526003600155604080516020808201939093528151808203840181529082019091528051610296926002920190611227565b5061029f6112ab565b6102ac602084018461139d565b6001600160a01b03168152602080840135908201526102d1608084016060850161139d565b6001600160a01b0316604082015260c083013560608201526102fa610100840160e0850161139d565b6001600160a01b031660808201524360a082015260405161032290600990839060200161170c565b60408051601f198184030181529190528051602090910120600055505050565b6040516103569060099083906020016116f8565b6040516020818303038152906040528051906020012060001c6000541461037c57600080fd5b60008055341561038b57600080fd5b7ff32e25cfce8ff9ee34874b43160ba1d4904f5a2924b260a1cee9738b7000f9d6816040516103ba919061163f565b60405180910390a16103ca6112fc565b6103d7602083018361139d565b81516001600160a01b0390911690528051602080840135918101919091528101516001905261040c60a083016080840161139d565b6020808301516001600160a01b03909216910152610430606083016040840161139d565b6020820180516001600160a01b039092166040909201919091528051606080850135910152514360809091015261046681611044565b5050565b60405161047e906002908390602001611779565b6040516020818303038152906040528051906020012060001c600054146104a457600080fd5b600080556104ba602082013560c08301356117f4565b43101580156104e5575060208101356104d8601460c08401356117f4565b6104e291906117f4565b43105b6104ee57600080fd5b3460a0820135146104fe57600080fd5b61050e60a082016080830161139d565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015610549573d6000803e3d6000fd5b507f0702f3ffd5ac5cf0557f0f0ed387269de086da6d12947f49d355b82dc03c7c8f816040516105799190611617565b60405180910390a16105896112fc565b610596602083018361139d565b81516001600160a01b039091169052805160208084013591810191909152810151600090526105cb608083016060840161139d565b6020808301516001600160a01b039092169101526105ef608083016060840161139d565b6020820180516001600160a01b0390921660409092019190915280516000606090910152514360809091015261046681611044565b604051610638906008908390602001611765565b6040516020818303038152906040528051906020012060001c6000541461065e57600080fd5b600080556020810135610676601460a08401356117f4565b61068091906117f4565b43101561068c57600080fd5b341561069757600080fd5b7fe6881ce256c4e3a25b085a934b11900e7ab6fc906e13bffbf75ae0ed5e8d4487816040516106c69190611685565b60405180910390a16106d66112fc565b6106e3602083018361139d565b81516001600160a01b0390911690528051602080840180359282019290925282015160009052610713908361139d565b6020808301516001600160a01b03909216918101919091526105ef9083018361139d565b60006001805414156107ed5760006002805461075290611818565b80601f016020809104026020016040519081016040528092919081815260200182805461077e90611818565b80156107cb5780601f106107a0576101008083540402835291602001916107cb565b820191906000526020600020905b8154815290600101906020018083116107ae57829003601f168201915b50505050508060200190518101906107e39190611423565b5191506108559050565b600260015414156108075760006002805461075290611818565b600360015414156108215760006002805461075290611818565b6004600154141561083b5760006002805461075290611818565b600560015414156100a75760006002805461075290611818565b90565b60405161086c906002908390602001611779565b6040516020818303038152906040528051906020012060001c6000541461089257600080fd5b600080556108a8602082013560c08301356117f4565b43106108b357600080fd5b34156108be57600080fd5b7fc0f551323196a561b6e82debcae11549b33b47a87948467b5daf52db8020104c816040516108ed91906115f2565b60405180910390a160408051602081019091526000815261091460a083016080840161139d565b6001600160a01b031680825260018055604080516020808201939093528151808203840181529082019091528051610950926002920190611227565b506109596112ab565b610966602084018461139d565b6001600160a01b031681526020808401359082015261098b60a084016080850161139d565b6001600160a01b0316604082015260e083013560608201526109b56101208401610100850161139d565b6001600160a01b031660808201524360a082015260405161032290600490839060200161170c565b6040516109f1906002908390602001611779565b6040516020818303038152906040528051906020012060001c60005414610a1757600080fd5b600080556020810135610a2f601460c08401356117f4565b610a3991906117f4565b431015610a4557600080fd5b3415610a5057600080fd5b7ff91de358853f744ef28fd3a5b35c9987845cbb8e8e748fa679c8996e0744af39816040516106c69190611617565b604051610a93906008908390602001611765565b6040516020818303038152906040528051906020012060001c60005414610ab957600080fd5b60008055610acf602082013560a08301356117f4565b4310158015610afa57506020810135610aed601460a08401356117f4565b610af791906117f4565b43105b610b0357600080fd5b34608082013514610b1357600080fd5b610b23608082016060830161139d565b6040516001600160a01b039190911690608083013580156108fc02916000818181858888f19350505050158015610b5e573d6000803e3d6000fd5b507f17422f2dfd16a93c6e95bad68f93407f83f4aaa1b451622d9a51e117cd90b79781604051610b8e9190611685565b60405180910390a1610b9e6112fc565b610bab602083018361139d565b81516001600160a01b03909116905280516020808401359181019190915281015160009052610be0606083016040840161139d565b6020808301516001600160a01b039092169101526105ef606083016040840161139d565b60408051600060208201528235918101919091526060016040516020818303038152906040528051906020012060001c60005414610c4157600080fd5b600080553415610c5057600080fd5b7f70035870112197a7da31bdc06b3c24e4999909832e23e83a888f26485893424081604051610c7f9190611693565b60405180910390a1610c8f6112fc565b80513390819052815160408085013560209283015281840180516000908190528151909301849052805190910192909252815160600152514360809091015261046681611044565b604051610ceb906002908390602001611779565b6040516020818303038152906040528051906020012060001c60005414610d1157600080fd5b600080553415610d2057600080fd5b610d31610100820160e083016113c0565b15610edd577f43c550b11e285bd2082107065bfcadeb5b39337a678afbd901e2d00d56e1b37981604051610d659190611617565b60405180910390a1604080516020810190915260008152610d8c60a083016080840161139d565b6001600160a01b03168082526004600155604080516020808201939093528151808203840181529082019091528051610dc9926002920190611227565b506040805160c08101825260008082526020808301829052928201819052606082018190526080820181905260a082015290610e079084018461139d565b6001600160a01b0316815260208084013590820152610e2c608084016060850161139d565b6001600160a01b03166040820152610e4a60a084016080850161139d565b6001600160a01b03908116606083810191825260a0868101356080808701918252438388019081526040805160086020808301919091528a518a16828401528a015196810196909652880151871691850191909152935190941690820152915160c08301525160e0820152610100015b60408051601f19818403018152919052805160209091012060005550610fc99050565b7f43c550b11e285bd2082107065bfcadeb5b39337a678afbd901e2d00d56e1b37981604051610f0c9190611617565b60405180910390a1610f1c6112fc565b610f29602083018361139d565b81516001600160a01b0390911690528051602080840135910152610f5360608301604084016113c0565b60208201519015159052610f6d608083016060840161139d565b6020808301516001600160a01b03909216910152610f9160a083016080840161139d565b6020820180516001600160a01b03909216604090920191909152805160a0840135606090910152514360809091015261046681611044565b50565b604051610fe09060049083906020016116f8565b6040516020818303038152906040528051906020012060001c6000541461100657600080fd5b60008055341561101557600080fd5b7fd1fd169d0c2de9ad958b0a4e0107fe4eecbecdcd44af97984956c1f88af5598e816040516103ba919061163f565b6020810151511561113b576040805160208101909152600081526020828101516040908101516001600160a01b0316808452600260015581519283015201604051602081830303815290604052600290805190602001906110a6929190611227565b506040805160e081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188815260c08a019889528c51516001600160a01b039081168b528d518901519097528c880180515115159096528551880151871690935284518a0151909516909452825190910151905251015190915291519091610eba9160029184910161178e565b6040805160208101909152600081526020828101516040908101516001600160a01b031680845260056001558151928301520160405160208183030381529060405260029080519060200190611192929190611227565b506040805160e081018252600080825260208083018281528385018381526060808601858152608080880187815260a0890188815260c08a019889528c51516001600160a01b039081168b528d518901519097528c880180515115159096528551880151871690935284518a01519095169094528251909101519052510151909152915190916103229160029184910161178e565b82805461123390611818565b90600052602060002090601f016020900481019282611255576000855561129b565b82601f1061126e57805160ff191683800117855561129b565b8280016001018555821561129b579182015b8281111561129b578251825591602001919060010190611280565b506112a792915061134a565b5090565b6040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081525090565b604080516080810182526000918101828152606082019290925290819081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291015290565b5b808211156112a7576000815560010161134b565b8035801515811461136f57600080fd5b919050565b60006101008284031215611386578081fd5b50919050565b600060e08284031215611386578081fd5b6000602082840312156113ae578081fd5b81356113b98161184d565b9392505050565b6000602082840312156113d1578081fd5b6113b98261135f565b60006101208284031215611386578081fd5b600061010082840312156113fe578081fd5b6113b98383611374565b600060e08284031215611419578081fd5b6113b9838361138c565b600060208284031215611434578081fd5b6040516020810181811067ffffffffffffffff8211171561146357634e487b7160e01b83526041600452602483fd5b60405282516114718161184d565b81529392505050565b60006113208284031215611386578081fd5b80356114978161184d565b6001600160a01b039081168352602082810135908401526040820135906114bd8261184d565b808216604085015260608301356060850152608083013591506114df8261184d565b16608083015260a090810135910152565b8035825260208101356115028161184d565b6001600160a01b03166020929092019190915250565b80356115238161184d565b6001600160a01b039081168352602082810135908401526040820135906115498261184d565b90811660408401526060820135906115608261184d565b1660608301526080818101359083015260a090810135910152565b80356115868161184d565b6001600160a01b038181168452602083810135908501526115a96040840161135f565b15156040850152606083013591506115c08261184d565b90811660608401526080820135906115d78261184d565b16608083015260a0818101359083015260c090810135910152565b6101208101611601828461157b565b61161160e0830160e085016114f0565b92915050565b6101008101611626828461157b565b61163260e0840161135f565b151560e083015292915050565b60e0810161164d828461148c565b61165960c0840161135f565b151560c083015292915050565b61010081016116758284611518565b61161160c0830160c085016114f0565b60e0810161164d8284611518565b60006113208201905082358252602080840135818401526040840135604084015260608301606085016000805b60968110156116ed57823560ff81168082146116da578384fd5b85525092840192918401916001016116c0565b505050505092915050565b82815260e081016113b9602083018461148c565b600060e08201905083825260018060a01b0380845116602084015260208401516040840152806040850151166060840152606084015160808401528060808501511660a08401525060a083015160c08301529392505050565b82815260e081016113b96020830184611518565b82815261010081016113b9602083018461157b565b60006101008201905083825260018060a01b03808451166020840152602084015160408401526040840151151560608401528060608501511660808401528060808501511660a08401525060a083015160c083015260c083015160e08301529392505050565b6000821982111561181357634e487b7160e01b81526011600452602481fd5b500190565b60028104600182168061182c57607f821691505b6020821081141561138657634e487b7160e01b600052602260045260246000fd5b6001600160a01b0381168114610fc957600080fdfea26469706673582212208b013653a6692e0359ee0931c6c55b2b10891aeaa903571d6ec0cc75bb95258b64736f6c63430008020033`,
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

