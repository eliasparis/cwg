function changeHash(hash: string) {
  return {
  	type: 'CHANGE_HASH',
		currentPageHash : hash
	}
}

function errorHash() {
  return { type: 'ERROR_HASH' }
}

function validHash() {
  return { type: 'VALID_HASH' }
}

export { changeHash, errorHash, validHash };