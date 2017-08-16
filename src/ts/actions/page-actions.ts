function changeHash(hash: string) {
  return {
  	type: 'CHANGE_HASH',
		currentPageHash : hash
	}
}

export { changeHash };