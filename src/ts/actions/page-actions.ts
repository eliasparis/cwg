function changeHash(hash: string) {
  return {
  	type: 'CHANGE_HASH',
		currentPageHash : hash
	}
}

function errorHash() {
  return { type: 'ERROR_HASH' }
}

export { changeHash, errorHash };