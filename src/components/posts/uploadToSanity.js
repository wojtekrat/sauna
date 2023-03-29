async function uploadData() {
  for (const item of data) {
    const docId = item._id.toString();
    const existingDoc = await client.getDocument(docId);
    
    if (existingDoc) {
      await client.patch(docId)
        .set({
          name: item.Name,
          address: item.Address,
          website: item.Website,
          facebook: item.Facebook,
          coordinates: item.Coordinates
        })
        .commit();
    } else {
      await client.create({
        _id: docId,
        _type: 'saunas',
        name: item.Name,
        address: item.Address,
        website: item.Website,
        facebook: item.Facebook,
        coordinates: item.Coordinates
      });
    }
  }

  console.log('Data uploaded successfully!');
}

uploadData();