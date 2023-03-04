const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe('0');
  });

  it("Returns the literal '0' when given `null`", () => {
    const trivialKey = deterministicPartitionKey(null);
    expect(trivialKey).toBe('0');
  });

  it("Returns the literal '0' when given `undefined`", () => {
    const trivialKey = deterministicPartitionKey(undefined);
    expect(trivialKey).toBe('0');
  });

  it('Returns the literal hash when given a Number', () => {
    const trivialKey = deterministicPartitionKey(1);
    expect(trivialKey).toBe(
      'ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa'
    );
  });

  it('Returns the literal hash when given a String', () => {
    const trivialKey = deterministicPartitionKey('test');
    expect(trivialKey).toBe(
      '0fa3727b22cbb0a5271dddfcb7d414a1a512284913ccd690b198751de8100b1ea1935c1b63c35837696f8e73709431de092894581bec9bbfe6532106733af6d8'
    );
  });

  it('Returns the literal hash when given a Date', () => {
    const trivialKey = deterministicPartitionKey(
      new Date('2023-03-04T20:43:41.622Z')
    );
    expect(trivialKey).toBe(
      '602e41713379b596f0dc8edafa90a664e7650a6dcf2a018cdf828f12da8694f76ead32a485e20cfcce37a1b03c6eb23ea4dd1bf2f8edeab42da939c8e62f2339'
    );
  });

  it('Returns the literal hash when given a Array', () => {
    const trivialKey = deterministicPartitionKey([]);
    expect(trivialKey).toBe(
      '888b858b73d5d34fedab0f07663436931a95c73d6d7808edc868767bb9172f9e542fb7bb1ad1dbe988ceff0aaffde2012bc0e7d1914e986269f46d93651436a5'
    );
  });

  it('Returns the literal hash when given a empty Object', () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe(
      'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862'
    );
  });

  it('Returns the literal hash when given a null partitionKey ', () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: null,
    });
    expect(trivialKey).toBe(
      '58540d4d440df8c6c6da0d79cfce715bc92953c6cde8be9f749790004ef2d5a7322d0fd5170eac9a37d57ee0cc975cfca068a60b01622529d9e0fd657f71b8e2'
    );
  });

  it("Returns the literal '1' when given a non-string partitionKey ", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: 1,
    });
    expect(trivialKey).toBe('1');
  });

  it('Returns the literal hash when given a empty-string partitionKey ', () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: '',
    });
    expect(trivialKey).toBe(
      'b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6'
    );
  });

  it("Returns the literal 'test-partition-key' when given only a string partitionKey", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: 'test-partition-key',
    });
    expect(trivialKey).toBe('test-partition-key');
  });

  it("Returns the literal 'test-partition-key' when given a partitionKey and other data", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: 'test-partition-key',
      foo: 'bar',
    });
    expect(trivialKey).toBe('test-partition-key');
  });

  it("Returns the literal '0' when given only a TRIVIAL_PARTITION_KEY", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: '0',
    });
    expect(trivialKey).toBe('0');
  });

  it("Returns the literal '0' when given a TRIVIAL_PARTITION_KEY and other data", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: '0',
      foo: 'bar',
    });
    expect(trivialKey).toBe('0');
  });

  it('Returns the literal hash when given a large partitionKey', () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey:
        '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
      foo: 'bar',
    });
    expect(trivialKey).toBe(
      'cc0211653c37993e9dee828cbfe2e209c56fd2b05c3bed5b5d5c1ddda9659c269b3e166e518907d14465162e02c3f66ca3790b7a19113ec9b1395b5f95a18711'
    );
  });

  it('Returns the literal hash when given a large partitionKey', () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey:
        '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
      foo: 'bar',
    });
    expect(trivialKey).toBe(
      'cc0211653c37993e9dee828cbfe2e209c56fd2b05c3bed5b5d5c1ddda9659c269b3e166e518907d14465162e02c3f66ca3790b7a19113ec9b1395b5f95a18711'
    );
  });

  it("Returns the literal 'test-partition-key' when given a large data and small partitionKey", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: 'test-partition-key',
      foo: '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
    });
    expect(trivialKey).toBe('test-partition-key');
  });

  it("Returns the literal 'test-partition-key' when given a large data and large partitionKey", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey:
        '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
      foo: '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890',
    });
    expect(trivialKey).toBe(
      'cc0211653c37993e9dee828cbfe2e209c56fd2b05c3bed5b5d5c1ddda9659c269b3e166e518907d14465162e02c3f66ca3790b7a19113ec9b1395b5f95a18711'
    );
  });
});
