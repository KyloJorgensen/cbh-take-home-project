const crypto = require('crypto');

const extractPartitionKeyCandidate = event => {
  const TRIVIAL_PARTITION_KEY = '0';

  if (!event) return TRIVIAL_PARTITION_KEY;

  if (event?.partitionKey && typeof event.partitionKey !== 'string') {
    return JSON.stringify(event.partitionKey);
  }

  if (event?.partitionKey) return event.partitionKey;

  const data = JSON.stringify(event);
  return crypto.createHash('sha3-512').update(data).digest('hex');
};

exports.deterministicPartitionKey = event => {
  const MAX_PARTITION_KEY_LENGTH = 256;

  const candidate = extractPartitionKeyCandidate(event);

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash('sha3-512').update(candidate).digest('hex');
  }

  return candidate;
};
