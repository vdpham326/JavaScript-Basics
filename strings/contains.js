let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

for (let i = 0; i < byteSequence.length; i += 1) {
    if (byteSequence[i] === 'x') return true;
}

byteSequence.includes('x');