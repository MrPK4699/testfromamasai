const express = require('express');
const router = express.Router();

function findFirstUniqueChar(str) {
      let obj = {};
      for (let i = 0; i < str.length; i++) {
            obj[str.charAt(i)] = obj[str.charAt(i)] + 1 || 1;
      }
      // console.log(obj);
      let j = 0;
      while (j < str.length && obj[str.charAt(j)] != 1) {
            j++;
      }
      if (j == str.length) {
            j = -1;
      }
      let ans = {
            first_unique_char: str.charAt(j) || '',
            first_unique_char_index: j,
            timestamp: new Date().toISOString(),
      }
      console.log(ans);
      return ans;
}


router.post('/first-unique-character', (req, res) => {
      const requestTime = new Date().toISOString();
      console.log(`[${requestTime}] Endpoint /first-unique-character called with input: ${JSON.stringify(req.body)}`);
      try {
            const { text_to_process } = req.body;

            if (!text_to_process || typeof text_to_process !== 'string') {
                  return res.status(400).json({
                        error: 'Invalid input: "text_to_process" must be a non-empty string.',
                        timestamp: requestTime,
                  });
            }
            const result = findFirstUniqueChar(text_to_process);
            res.status(201).json({...result, timestamp : requestTime});
      } catch (error) {
            console.error(error);
            res.status(500).json({
                  error: 'An unexpected error occurred.',
                  timestamp: new Date().toISOString(),
            });
      }

});
// findFirstUniqueChar('keetnode');
// findFirstUniqueChar('aabb');

module.exports= router;