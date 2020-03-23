export class BlockValueObject {
  constructor({
    blockId,
    creationDate,
    previousHash,
    blockData,
    nonce,
    currentHash
  }) {
    this._blockId = blockId
    this._previousHash = previousHash
    this._creationDate = creationDate
    this._blockData = blockData
    this._nonce = nonce
    this._currentHash = currentHash
  }

  static validate({blockId, previousHash}) {
    if (typeof blockId !== 'number') {
      throw new Error('Invalid BlockId, it *must* be a Number')
    }

    if (typeof previousHash === 'undefined') {
      throw new Error('Previous Block Hash *must* be provided')
    } else if (previousHash === 0) {
      this.genesisBlock()
    }
  }

  blockId() {
    return this._blockId
  }

  toJSON() {
    return {
      blockId: this.blockId(),
      creationDate: this._creationDate,
      blockData: this._blockData,
      previousHash: this._previousHash,
      nonce: this._nonce,
      currentHash: this._currentHash
    }
  }
}
