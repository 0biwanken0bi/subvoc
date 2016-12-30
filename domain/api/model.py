class Media:
    def __init__(self, id, title, year):
        self.id = id
        self.title = title
        self.year = year

    def __eq__(self, other):
        return isinstance(other, __class__) and self.id == other.id

    def __ne__(self, other):
        return not self.__eq__(other)


class Subtitle:
    def __init__(self, id, media, downloads, encoding, partial, text=None):
        self.id = id
        self.media = media
        self.downloads = downloads
        self.encoding = encoding
        self.partial = partial
        self.text = text


def to_model(item):
    media = Media(
        id = item.get('IDMovieImdb'),
        title = item.get('MovieName'),
        year = item.get('MovieYear'),
    )

    return Subtitle(
        id = item.get('IDSubtitleFile'),
        media = media,
        partial = item.get('SubSumCD') != '1',
        encoding = item.get('SubEncoding'),
        downloads = int(item.get('SubDownloadsCnt')),
    )