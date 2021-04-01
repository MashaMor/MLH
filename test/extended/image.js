import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import path from "path";

describe('Image', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-147 Image field placeholder = "Click or drag and drop"', function () {
        let placeholder = $(sel.image).getText();
        expect(placeholder).toEqual(exp.imagePH);
    });

    it('TC-148 Click works for .jpeg files', function () {
        const fileUpload = $(sel.imageUpload);
        const filePath = path.join(__dirname, '../../data/image/2mb-2 2.jpg');
        const remoteFilePath = browser.uploadFile(filePath);
        browser.execute(
            (el) => el.style.display = 'block',
            fileUpload
        );
        fileUpload.waitForDisplayed();
        fileUpload.setValue(remoteFilePath);
        const thumbnail = $(sel.imageThumbnail);
        expect(thumbnail).toBeExisting();
    });



});
